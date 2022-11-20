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
        cols.map(({rows, dataCssTitle, extraClasses}) => (
          <TableCell
            key={rows[0].content}
            rows={rows}
            dataCssTitle={dataCssTitle}
            extraClasses={extraClasses}
          />
        ))
      }
    </tr>
  )
}

export default TableRow;
