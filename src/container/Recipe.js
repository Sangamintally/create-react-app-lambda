import React from 'react';
import { withStyles,  createStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

const label = (carb,fat,pro)=>{
    let p_ratio = pro/carb+fat+pro;
    let c_ratio = carb+fat/carb+fat+pro;
    if(p_ratio > 15) {
      return `High protein`
    }
    if(p_ratio <= 15 && p_ratio >= 12) {
      return `Balanced`
    }
    if(c_ratio > 50) {
      return `High Carb`
    }
    return `Regular `
  }

export default function Recipe(props) {

   return (
     <div>
       {props.item > 0 ?
           <div>
    <h2> Recipe Data </h2> 
    <TableContainer component={Paper}>
      <Table className="table-width" aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell>Image</StyledTableCell>
            <StyledTableCell>Qty</StyledTableCell>
            <StyledTableCell>Unit</StyledTableCell>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell align="right">Calories</StyledTableCell>
            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">label</StyledTableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
        {props.Recipe.map((row) => (
            <StyledTableRow key={row.recipe}>
            <StyledTableCell component="th" scope="row">
              <img className = "image-source" src = {row.recipe.image}></img>
            </StyledTableCell>
            <StyledTableCell component="th" scope="row">
              {row.recipe.yield}
            </StyledTableCell>
            <StyledTableCell component="th" scope="row">
            servings
            </StyledTableCell>
            <StyledTableCell component="th" scope="row">
              {row.recipe.label}
            </StyledTableCell>

            <StyledTableCell align="right">{row.recipe.calories}</StyledTableCell>
            <StyledTableCell align="right">{row.recipe.digest[0].total}</StyledTableCell>
            <StyledTableCell align="right">{row.recipe.digest[1].total}</StyledTableCell>
            <StyledTableCell align="right">{row.recipe.digest[2].total}</StyledTableCell>
            <StyledTableCell align="right">{label(row.recipe.digest[1].total,row.recipe.digest[0].total,row.recipe.digest[2].total)}</StyledTableCell>
          </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
    </div>
         :""}
     </div>
   )
  
}
