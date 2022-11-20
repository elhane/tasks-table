import React from 'react';
import {TableRow} from '../../types/table';

type TableCellProps = {
  rows: TableRow[],
  dataCssTitle: string | number,
  extraClasses: string[]
}

function TableCell({rows, dataCssTitle, extraClasses = []}: TableCellProps): JSX.Element {
  return (
    <td className={extraClasses.join(" ")}>
      <div key={dataCssTitle} data-css-title={dataCssTitle}>
        {
          rows.map(({tag, content, extraClasses = []}) => (
            tag === 'span' ?
              <span className={extraClasses.join(" ")}>{content}</span>
              :
              <time className={extraClasses.join(" ")}>{content}</time>
          ))
        }
      </div>
    </td>
  )
}

export default TableCell;
