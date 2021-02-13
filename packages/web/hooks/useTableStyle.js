import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import { withStyles } from '@material-ui/core/styles'

export const useTableStyle = (navigate, shouldNavigate = true) => {
  const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: '#a5d749',
      color: theme.palette.common.black,
    },
  }))(TableCell)

  const StyledTableRow = withStyles(theme => ({
    root: {
      '&:nth-of-type(even)': {
        backgroundColor: '#e2e0f3',
      },
    },
  }))(TableRow)
  return {
    StyledTableCell,
    StyledTableRow,
  }
}
