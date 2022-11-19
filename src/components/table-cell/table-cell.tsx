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
          <React.Fragment key={content}>
            {
              tag === 'span' ?
                <span className={extraClasses.join(" ")}>{content}</span>
                :
                <time className={extraClasses.join(" ")}>{content}</time>
            }
          </React.Fragment>
        ))
      }
    </td>
  )
}

export default TableCell;
