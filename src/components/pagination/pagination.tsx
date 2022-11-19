import './pagination.scss';
import { Pagination } from 'semantic-ui-react'
import React from 'react';
import {PaginationProps} from 'semantic-ui-react/dist/commonjs/addons/Pagination/Pagination';

type PaginationBlockProps = {
  tasksAmount: number,
  onPageChange: (event: React.MouseEvent<HTMLAnchorElement>, data: PaginationProps) => void,
  totalPages: number,
  currentPage: number
}

function PaginationBlock({tasksAmount, onPageChange, totalPages, currentPage}: PaginationBlockProps):JSX.Element {
  return (
    <div className="page-pagination">
      <span className="page-pagination__label color-grey">записи 1-{tasksAmount}</span>

      <Pagination
        defaultActivePage={1}
        totalPages={totalPages}
        ellipsisItem={null}
        siblingRange={0}
        boundaryRange={0}
        prevItem={{ content: "‹", disabled: currentPage === 1 }}
        nextItem={{ content: "›" , disabled: currentPage === totalPages}}
        firstItem={{ content: "«", disabled: currentPage === 1 }}
        lastItem={{ content: "»", disabled: currentPage === totalPages }}
        onPageChange={onPageChange}
      />
    </div>

  )
}

export default PaginationBlock;
