import Main from './screens/Main';
import store from '@recipes/redux-store';
import Container from '@material-ui/core/Container';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './styles.scss';
import {
  ingredientsActions,
  recipesActions,
  settingsActions,
} from '@recipes/services';

const theme = createMuiTheme({});
const emfStore = store();
emfStore.dispatch(recipesActions.getRecipes());
emfStore.dispatch(ingredientsActions.getIngredients());
emfStore.dispatch(settingsActions.getSettings());

render(
  <Provider store={emfStore}>
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Main />
      </Container>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
