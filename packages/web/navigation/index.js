import { Router } from '@reach/router';
import React from 'react';
import Home from '../screens/Home';
import GenerateMenuForm from '../forms/GenerateMenuForm';
import RecipesListView from '../screens/RecipesListView';
import RecipesForm from '../forms/RecipesForm';
import IngredientsListView from '../screens/IngredientsListView';
import IngredientsForm from '../forms/IngredientsForm';
import HistoryListView from '../screens/HistoryListView';
import NoMatch from '../screens/NoMatch';
import SettingsForm from '../forms/SettingsForm';

//const Home = React.lazy(() => import('../screens/Home'));
// const GenerateMenuForm = React.lazy(() => import('../forms/GenerateMenuForm'));
// const Recipes = React.lazy(() => import('../screens/RecipesListView'));
// const RecipesForm = React.lazy(() => import('../forms/RecipesForm'));
// const Ingredients = React.lazy(() => import('../screens/IngredientsListView'));
// const IngredientsForm = React.lazy(() => import('../forms/IngredientsForm'));
// const History = React.lazy(() => import('../screens/HistoryListView'));
// const NoMatch = React.lazy(() => import('../screens/NoMatch'));
// const Loading = React.lazy(() => import('../screens/Loading'));

const routes = (
  <div>
    {/* <Suspense fallback={<Loading />}> */}
    <Router>
      <Home path="/" />
      <RecipesForm path="recipe/:id" />
      <RecipesListView path="recipes" />
      <IngredientsListView path="ingredients" />
      <IngredientsForm path="ingredient/:id" />
      <HistoryListView path="history" />
      <GenerateMenuForm path="generate" />
      <SettingsForm path="settings" />
      <NoMatch default />
    </Router>
    {/* </Suspense> */}
  </div>
);

export default routes;
