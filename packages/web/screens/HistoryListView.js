import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const HistoryListView = (props) => {
  const history = props.history || [];
  const deleteEntry = (event) => {
    props.deleteEntry({ id: event.target.id });
  };

  const entryList = () => {
    return history.map((entry) => {
      const { datetime, id, recipename, recipetype } = entry;

      return (
        <TableBody key={id}>
          <TableCell>{recipename}</TableCell>
          <TableCell>{recipetype}</TableCell>
          <TableCell>{datetime.toString()}</TableCell>
          <TableCell>
            <a className="simpleLink" id={id} onClick={deleteEntry}>
              Delete
            </a>
          </TableCell>
        </TableBody>
      );
    });
  };

  return (
    <div>
      <TableContainer component={Paper}>{entryList()}</TableContainer>
    </div>
  );
};

export default HistoryListView;
