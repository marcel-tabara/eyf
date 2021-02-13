import React from 'react';
import sortBy from 'lodash/sortBy';
import get from 'lodash/get';
import RecipesSearchForm from '../forms/RecipeSearchForm';
import { navigate } from '@reach/router';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { recipesActions, recipesSelectors } from '@recipes/services';
import { useDispatch, useSelector } from 'react-redux';
import { useTableStyle } from '../hooks/useTableStyle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  input: {
    display: 'none',
  },
  table: { minWidth: 650 },
});

const RecipesList = (props) => {
  const dispatch = useDispatch();
  const recipes = useSelector(recipesSelectors.recipesSelector) || [];
  const { StyledTableCell, StyledTableRow } = useTableStyle();
  const classes = useStyles();

  const deleteRecipe = ({ target: { id } }) => {
    const newRec = recipes.filter((e) => e.name !== id);
    dispatch(recipesActions.updateRecipes(newRec));
  };

  const filteredItems = () => {
    const filteredRecipes = recipes.filter((el) => {
      if (
        get(props.searchData, 'name', false) ||
        get(props.searchData, 'recipeType', false)
      ) {
        return (
          el.name
            .toLowerCase()
            .includes(get(props.searchData, 'name', el.name).toLowerCase()) &&
          get(props.searchData, 'recipeType', el.recipeType) === el.recipeType
        );
      }
      return el;
    });

    return sortBy(filteredRecipes, (el) => el.name);
  };

  const recipesList = () => {
    return filteredItems().map((recipe) => {
      const { name, id, description, recipeType } = recipe;

      const goTo = ({ target: { id } }) => {
        navigate(`/recipe/${id}`);
      };

      return (
        <StyledTableRow key={name}>
          <TableCell>
            <a onClick={goTo} className="simpleLink" id={name}>
              {name}
            </a>
          </TableCell>
          <TableCell>{recipeType}</TableCell>
          <TableCell>{description.slice(0, 100)}</TableCell>
          <TableCell align="right">
            <a className="simpleLink" id={id} onClick={deleteRecipe} id={name}>
              Delete
            </a>
          </TableCell>
        </StyledTableRow>
      );
    });
  };

  return (
    <div>
      <RecipesSearchForm />
      <Button
        component="button"
        color="primary"
        variant="outlined"
        onClick={() => navigate('/recipe/new')}
      >
        Add Recipe
      </Button>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Type</StyledTableCell>
              <StyledTableCell>Stock</StyledTableCell>
              <StyledTableCell align="right">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>{recipesList()}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default RecipesList;
