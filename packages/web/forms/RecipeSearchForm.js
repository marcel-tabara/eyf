import React from 'react';
import Form from '@rjsf/material-ui';
import Button from '@material-ui/core/Button';

const RecipeSearchForm = ({
  searchData = {},
  setFilterData = () => undefined,
}) => {
  const recipeTypes = ['SOUP', 'MAIN', 'SALAD'];

  const schema = {
    type: 'object',
    properties: {
      name: { type: 'string', default: '' },
      recipeType: {
        type: 'string',
        enum: recipeTypes,
      },
    },
  };

  const uiSchema = {
    name: {
      'ui:options': {
        label: false,
      },
      'ui:placeholder': 'Name',
    },
    recipeType: {
      'ui:placeholder': 'All Types',
      'ui:options': {
        label: false,
      },
    },
  };

  const onChange = ({ formData }) => {
    setFilterData(formData);
  };

  const log = (type) => console.log.bind(console, type);

  return (
    <div className="filterRecipesBox">
      <div className="paddingTop">
        <Form
          schema={schema}
          uiSchema={uiSchema}
          onChange={onChange}
          onError={log('errors')}
          formData={searchData}
        >
          <Button type="submit" className="hidden">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default RecipeSearchForm;
