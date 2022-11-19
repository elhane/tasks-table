import './pagination.scss';
import { Pagination } from 'semantic-ui-react'
import React from 'react';
import {PaginationProps} from 'semantic-ui-react/dist/commonjs/addons/Pagination/Pagination';

type PaginationBlockProps = {
  tasksPerPageCount: number,
  onPageChange: (event: React.MouseEvent<HTMLAnchorElement>, data: PaginationProps) => void,
  totalPages: number,
  currentPage: number
}

function PaginationBlock({tasksPerPageCount, onPageChange, totalPages, currentPage}: PaginationBlockProps):JSX.Element {
  return (
    <div className="page-pagination">
      <span className="page-pagination__label color-grey">{(tasksPerPageCount * currentPage + 1) - tasksPerPageCount}-{tasksPerPageCount * currentPage}</span>

      <Pagination
        activePage={currentPage}
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
