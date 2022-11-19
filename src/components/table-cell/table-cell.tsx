import React from 'react';
import {TableRow} from '../../types/table';

type TableCellProps = {
  rows: TableRow[],
}

function TableCell({rows}: TableCellProps): JSX.Element {
  return (
    <td>
      {
        rows.map(({tag, content, extraClasses = []}) => (
          tag === 'span' ? <span className={extraClasses.join(" ")}>{content}</span> : <time className={extraClasses.join(" ")}>{content}</time>

        ))
      }
    </td>
  )
}

export default TableCell;
