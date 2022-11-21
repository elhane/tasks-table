import React from 'react';
import {TableRow} from '../../types/table';
import classNames from 'classnames';

type TableCellProps = {
  rows: TableRow[],
  dataCssTitle: string | number,
  extraClasses: string,
  link?: string
};

function TableCell({rows, dataCssTitle, extraClasses, link = ''}: TableCellProps): JSX.Element {
  return (
    <td className={classNames(extraClasses)}>
      {link ? <a href={link} rel='noreferrer noopener'></a>: ''}
      <div
        key={dataCssTitle}
        data-css-title={dataCssTitle}
      >
        {
          rows.map(({tag, content, extraClasses }) => (
            tag === 'span' ?
              <span className={classNames(extraClasses)} key={content}>{content}</span>
              :
              <time className={classNames(extraClasses)} key={content}>{content}</time>
          ))
        }
      </div>
    </td>
  )
}

export default TableCell;
