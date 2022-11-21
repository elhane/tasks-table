import React from 'react';
import {TableRow} from '../../types/table';

type TableCellProps = {
  rows: TableRow[],
  dataCssTitle: string | number,
  extraClasses: string[],
  link?: string
};

function TableCell({rows, dataCssTitle, extraClasses = [], link = ''}: TableCellProps): JSX.Element {
  return (
    <td className={extraClasses.join(' ')}>
      {link ? <a href={link} rel="noreferrer noopener"></a>: ''}
      <div
        key={dataCssTitle}
        data-css-title={dataCssTitle}
      >
        {
          rows.map(({tag, content, extraClasses = []}) => (
            tag === 'span' ?
              <span className={extraClasses.join(' ')} key={content}>{content}</span>
              :
              <time className={extraClasses.join(' ')} key={content}>{content}</time>
          ))
        }
      </div>
    </td>
  )
}

export default TableCell;
