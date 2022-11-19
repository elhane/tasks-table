import './table.scss';
import React from 'react';
import {Task} from '../../types/task';
import {getFormattedDate} from '../../utils';
import {Status, columns} from '../../const';
import TableRow from '../table-row/table-row';
import TableThead from '../table-thead/table-thead';

type TableProps = {
  tasks: Task[]
}

function Table({tasks}: TableProps) {

  return (
    <>
      <table className="table">
        <TableThead cols={columns} />

        <tbody>
        {
          tasks.map(({id, order_type, created_date, created_user, account, terminal, status}) => {
            const taskCols = [
              {
                rows: [
                  {
                    content: `№${id}`,
                    tag: 'span'
                  },
                  {
                    content: `${getFormattedDate(created_date)}`,
                    tag: 'time',
                    extraClasses: ['color-grey']
                  }
                ]
              },
              {
                rows: [
                  {
                    content: order_type.name,
                    tag: 'span'
                  },
                  {
                    content: `${created_user.surname} ${created_user.name[0]}.${created_user.patronymic[0]}.`,
                    tag: 'span',
                    extraClasses: ['color-grey']
                  }
                ]
              },
              {
                rows: [
                  {
                    content: account.name,
                    tag: 'span',
                    extraClasses: ['text-overflow']
                  },
                  {
                    content: terminal.name,
                    tag: 'span',
                    extraClasses: ['color-grey', 'text-overflow']
                  },
                ]
              },
              {
                rows: [
                  {
                    content: Status[status].name,
                    tag: 'span',
                    extraClasses: ['status', `${Status[status].class}`]
                  }
                ]
              },
            ];

            return (
              <TableRow key={id} cols={taskCols} />
            )
          })
        }
        </tbody>
      </table>
    </>
  );
}

export default Table;
