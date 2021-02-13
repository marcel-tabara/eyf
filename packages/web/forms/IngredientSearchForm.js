import React from 'react';
import Form from '@rjsf/material-ui';
import Button from '@material-ui/core/Button';

const IngredientSearchForm = ({
  searchData = {},
  setFilterData = () => undefined,
}) => {
  const ingredientTypes = ['carne', 'legume', 'crupe', 'paste', 'lactate'];
  const stockType = [false, true];

  const schema = {
    type: 'object',
    properties: {
      name: { type: 'string', default: '' },
      ingredientType: {
        type: 'string',
        enum: ingredientTypes,
      },
      stockType: {
        type: 'string',
        enum: stockType,
        enumNames: ['In stock', 'Out of stock'],
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
    ingredientType: {
      'ui:placeholder': 'All Types',
      'ui:options': {
        label: false,
      },
    },
    stockType: {
      'ui:placeholder': 'All Stock',
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
    <div className="filterIngredientsBox">
      <span className="filterComponentsLabel">FILTER INGREDIENTS</span>
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

export default IngredientSearchForm;
