import React from 'react';
import sortBy from 'lodash/sortBy';
import get from 'lodash/get';
import IngredientSearchForm from '../forms/IngredientSearchForm';
import { navigate } from '@reach/router';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { ingredientsActions, ingredientsSelectors } from '@recipes/services';
import { useDispatch, useSelector } from 'react-redux';
import { useTableStyle } from '../hooks/useTableStyle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  input: {
    display: 'none',
  },
  table: { minWidth: 650 },
});

const IngredientsListView = (props) => {
  const dispatch = useDispatch();
  const ingredients =
    useSelector(ingredientsSelectors.ingredientsSelector) || [];

  const deleteIngredient = ({ target: { id } }) => {
    const newIngr = ingredients.filter((e) => e.name !== id);
    dispatch(ingredientsActions.updateIngredients(newIngr));
  };

  const { StyledTableCell, StyledTableRow } = useTableStyle();
  const classes = useStyles();

  const filteredItems = () => {
    const filteredIngredients = ingredients.filter((el) => {
      return (
        el.name
          .toLowerCase()
          .includes(get(props.searchData, 'name', el.name).toLowerCase()) &&
        get(props.searchData, 'ingredientType', el.ingredientType) ===
          el.ingredientType &&
        get(props.searchData, 'stockType', el.isOutOfStock) === el.isOutOfStock
      );
    });

    return sortBy(filteredIngredients, (el) => el.name);
  };

  const ingredientsList = () => {
    return filteredItems().map((ingredient) => {
      const { name, id, ingredientType, isOutOfStock } = ingredient;

      const goTo = ({ target: { id } }) => navigate(`/ingredient/${id}`);
      return (
        <StyledTableRow key={name}>
          <TableCell>
            <a onClick={goTo} className="simpleLink" id={name}>
              {name}
            </a>
          </TableCell>
          <TableCell>{ingredientType}</TableCell>
          <TableCell>{isOutOfStock ? 'out of stock' : 'in stock'}</TableCell>
          <TableCell align="right">
            <a className="simpleLink" id={name} onClick={deleteIngredient}>
              Delete
            </a>
          </TableCell>
        </StyledTableRow>
      );
    });
  };

  return (
    <div>
      <IngredientSearchForm />
      <div>
        <Button
          component="button"
          color="primary"
          variant="outlined"
          onClick={() => navigate('/ingredient/new')}
        >
          Add Ingredient
        </Button>
      </div>
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
          <TableBody>{ingredientsList()}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default IngredientsListView;
