import React from 'react';
import TableCell from '../table-cell/table-cell';
import {TableCols} from '../../types/table';

type TableRowProps = {
  cols: TableCols
}

function TableRow({cols}: TableRowProps): JSX.Element {

  return (
    <tr>
      {
        cols.map(({rows}) => (
          <TableCell rows={rows} />
        ))
      }
    </tr>
  )
}

export default TableRow;