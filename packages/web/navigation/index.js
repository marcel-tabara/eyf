import { Router } from '@reach/router';
import React from 'react';
import Home from '../screens/Home';
import GenerateMenuForm from '../forms/GenerateMenuForm';
import RecipesList from '../screens/RecipesList';
import RecipesForm from '../forms/RecipesForm';
import IngredientsList from '../screens/IngredientsList';
import IngredientsForm from '../forms/IngredientsForm';
import HistoryList from '../screens/HistoryList';
import NoMatch from '../screens/NoMatch';
import SettingsForm from '../forms/SettingsForm';

//const Home = React.lazy(() => import('../screens/Home'));
// const GenerateMenuForm = React.lazy(() => import('../forms/GenerateMenuForm'));
// const Recipes = React.lazy(() => import('../screens/RecipesList'));
// const RecipesForm = React.lazy(() => import('../forms/RecipesForm'));
// const Ingredients = React.lazy(() => import('../screens/IngredientsList'));
// const IngredientsForm = React.lazy(() => import('../forms/IngredientsForm'));
// const History = React.lazy(() => import('../screens/HistoryList'));
// const NoMatch = React.lazy(() => import('../screens/NoMatch'));
// const Loading = React.lazy(() => import('../screens/Loading'));

const routes = (
  <div>
    {/* <Suspense fallback={<Loading />}> */}
    <Router>
      <Home path="/" />
      <RecipesForm path="recipe/:id" />
      <RecipesList path="recipes" />
      <IngredientsList path="ingredients" />
      <IngredientsForm path="ingredient/:id" />
      <HistoryList path="history" />
      <GenerateMenuForm path="generate" />
      <SettingsForm path="settings" />
      <NoMatch default />
    </Router>
    {/* </Suspense> */}
  </div>
);

export default routes;
