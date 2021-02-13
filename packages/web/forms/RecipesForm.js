import React from 'react';
import Form from '@rjsf/material-ui';
import isEmpty from 'lodash/isEmpty';
import sortBy from 'lodash/sortBy';
import get from 'lodash/get';
import uniq from 'lodash/uniq';
import { navigate } from '@reach/router';
import {
  recipesSchemas,
  ingredientsSelectors,
  recipesSelectors,
  recipesActions,
} from '@recipes/services';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';

const RecipesForm = (props) => {
  const dispatch = useDispatch();
  const recipes = useSelector(recipesSelectors.recipesSelector) || [];
  const ingredients =
    useSelector(ingredientsSelectors.ingredientsSelector) || [];
  console.log('########## recipes', recipes);
  const selectedRrecipe = !isEmpty(recipes)
    ? recipes.find((recipe) => recipe.name === props.id)
    : [];

  //const ingredients = sortBy(props.ingredients, (el) => el.name) || [];
  const ingredientsListArray = get(selectedRrecipe, 'ingredientsList', []);

  const recipe = selectedRrecipe || {
    name: '',
    description: '',
    startTime: '',
    plates: '',
  };

  const ingredientsList = () => ingredients.map((el) => el.name);
  const schema = recipesSchemas.recipesSchema({
    recipe,
    ingredientList: ingredientsList(),
  });
  const uiSchema = recipesSchemas.recipesUiSchema;
  const onSubmit = ({ formData }) => {
    const newRec =
      props.id === 'new'
        ? Array.from(recipes).concat(formData)
        : recipes.map((orig) => (orig.name === props.name ? formData : orig));
    dispatch(recipesActions.updateRecipes(newRec));
    navigate('/recipes');
  };

  const onChange = (data) => {
    const { formData } = data;
    formData.ingredientsList = uniq(
      get(formData, 'ingredientsList', []).concat(ingredientsListArray),
    );
  };

  const goTo = () => {
    navigate('/recipes');
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
        onChange={onChange}
        onSubmit={onSubmit}
        onError={log('errors')}
      />
    </div>
  );
};

export default RecipesForm;
