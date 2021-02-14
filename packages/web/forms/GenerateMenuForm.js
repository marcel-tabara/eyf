import React, { useState } from 'react';
import Form from '@rjsf/material-ui';
import Button from '@material-ui/core/Button';
import isEmpty from 'lodash/isEmpty';
import { getAvalableRecipesGroups } from '@recipes/services/utils';
import { navigate } from '@reach/router';
import { menuSchemas } from '@recipes/services';

const GenerateMenuForm = (props) => {
  const [days, setDays] = useState(0);
  const [menu, setMenu] = useState({});

  const { ingredients, recipes, history, setEntry } = props;
  const schema = {
    type: 'object',
    required: ['days'],
    properties: {
      days: { type: 'string', title: 'Days', default: '' },
    },
  };
  const uiSchema = {
    id: { 'ui:widget': 'hidden' },
    recipeType: {
      'ui:placeholder': 'Choose a provider',
    },
    description: {
      'ui:widget': 'textarea',
      'ui:options': {
        rows: 15,
      },
    },
  };

  const saveMenu = () => {
    const finalMenu = getMenu();

    const menuIds = finalMenu['MAIN']
      .map((el) => el)
      .concat(finalMenu['SALAD'].map((el) => el))
      .concat(finalMenu['SOUP'].map((el) => el));

    menuIds.map((el) =>
      setEntry({
        recipeid: el.id,
        recipename: el.name,
        recipetype: el.recipeType,
        date: new Date(),
      }),
    );
    setMenu(finalMenu);
  };

  const getMenu = () => {
    let obj = {};
    let totals = {};
    Object.keys(menu).forEach((key) => {
      totals[key] = 0;
      obj[key] = [];
    });

    if (!isEmpty(menu)) {
      Object.keys(menu).forEach((key) => {
        let idx = 0;
        menu[key].map((el) => {
          if (totals[key] < days) {
            obj[key].push(menu[key][idx]);
            totals[key] += parseInt(menu[key][idx].plates);
          }
          idx++;
        });
      });
    }
    return obj;
  };

  const renderGeneratorResults = () => {
    const menu1 = getMenu();
    let obj = '';
    let arr = [];

    if (isEmpty(menu1)) return null;
    Object.keys(menu1).forEach((key) => {
      arr.push(key);
      obj = menu1[key].map((el) => {
        return (
          <div key={el.id}>
            <div>
              {el.name} - {el.plates}
            </div>
          </div>
        );
      });
      arr.push(obj);
    });

    return (
      <div>
        {arr.map((e) => e)}
        <Button variant="primary" onClick={saveMenu}>
          Save
        </Button>
      </div>
    );
  };

  const onSubmit = (data) => {
    const { formData } = data;
    setDays(formData.days);
    setMenu(getAvalableRecipesGroups(ingredients, recipes, history));
  };

  const goBack = useCallback(() => {
    navigate('/recipes');
  }, []);

  const renderForm = () => {
    if (!isEmpty(menu)) return null;
    return (
      <div>
        <div>
          <Button
            component="button"
            color="primary"
            variant="outlined"
            onClick={goBack}
          >
            Back
          </Button>
        </div>
        <Form
          schema={schema}
          uiSchema={uiSchema}
          onChange={log('changed')}
          onSubmit={onSubmit}
          onError={log('errors')}
        />
      </div>
    );
  };

  const log = (type) => console.log.bind(console, type);
  return (
    <div className="middle20">
      {renderForm()}
      {renderGeneratorResults()}
    </div>
  );
};

export default GenerateMenuForm;
