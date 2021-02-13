import React from 'react';
import Form from '@rjsf/material-ui';
import isEmpty from 'lodash/isEmpty';
import { navigate } from '@reach/router';
import {
  ingredientsActions,
  ingredientsSchemas,
  ingredientsSelectors,
} from '@recipes/services';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';

const IngredientsForm = (props) => {
  const dispatch = useDispatch();
  const ingredients =
    useSelector(ingredientsSelectors.ingredientsSelector) || [];

  const selectedIngredient = !isEmpty(ingredients)
    ? ingredients.find((ingredient) => ingredient.name === props.id)
    : undefined;

  const ingredient = selectedIngredient || {
    name: '',
    isOutOfStock: false,
  };

  const schema = ingredientsSchemas.ingredientsSchema({ ingredient });
  const uiSchema = ingredientsSchemas.ingredientsUiSchema;

  const goTo = () => navigate('/ingredients');
  const onSubmit = ({ formData }) => {
    const newIng =
      props.id === 'new'
        ? Array.from(ingredients).concat(formData)
        : ingredients.map((orig) =>
            orig.name === props.name ? formData : orig,
          );
    dispatch(ingredientsActions.updateIngredients(newIng));
    goTo();
  };

  const log = (type) => console.log.bind(console, type);
  return (
    <div className="middle20">
      <div>
        <Button
          onClick={goTo}
          component="button"
          color="primary"
          variant="outlined"
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

export default IngredientsForm;
