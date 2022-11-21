import React, {memo} from 'react';
import {TheadCol} from '../../types/table';
import classNames from 'classnames';

type TableTheadProps = {
  cols: TheadCol[]
};

function TableThead({cols}: TableTheadProps): JSX.Element {

  return (
    <thead>
      <tr>
        {
          cols.map(({content, extraClasses = [] }) =>
            <th
              key={content}
              className={classNames(extraClasses)}
            >
              {content}
            </th>
          )
        }
      </tr>
    </thead>
  )
}
export default memo(TableThead);
