import './pagination.scss';
import { Pagination as SemanticPagination } from 'semantic-ui-react'
import React from 'react';
import {PaginationProps} from 'semantic-ui-react/dist/commonjs/addons/Pagination/Pagination';

type PaginationBlockProps = {
  tasksPerPageCount: number,
  onPageChange: (event: React.MouseEvent<HTMLAnchorElement>, data: PaginationProps) => void,
  totalPages: number,
  currentPage: number
};

function Pagination({tasksPerPageCount, onPageChange, totalPages, currentPage}: PaginationBlockProps):JSX.Element {
  return (
    <div className="page-pagination">
      <span className="page-pagination__label color-grey">
        записи {(tasksPerPageCount * currentPage + 1) - tasksPerPageCount}
        &#8209;
        {tasksPerPageCount * currentPage}
      </span>

      <SemanticPagination
        activePage={currentPage}
        totalPages={totalPages}
        ellipsisItem={null}
        siblingRange={0}
        boundaryRange={0}
        prevItem={{ content: '‹', disabled: currentPage === 1 }}
        nextItem={{ content: '›' , disabled: currentPage === totalPages }}
        firstItem={{ content: '«', disabled: currentPage === 1 }}
        lastItem={{ content: '»', disabled: currentPage === totalPages }}
        onPageChange={onPageChange}
      />
    </div>
  )
}

export default Pagination;
