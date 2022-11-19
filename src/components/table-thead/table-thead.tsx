import React from 'react';
import {TheadCol} from '../../types/table';

type TableTheadProps = {
  cols: TheadCol[]
}

function TableThead({cols}: TableTheadProps): JSX.Element {

  return (
    <thead>
      <tr>
        {
          cols.map(({content, extraClasses = [] }) =>
            <th key={content} className={extraClasses.join(' ')}>{content}</th>
          )
        }
      </tr>
    </thead>
  )
}
export default TableThead;
