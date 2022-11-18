import './table.scss';
import React, {useEffect, useState} from 'react';
import {Task} from '../../types/task';
import {getFormattedDate, getData} from '../../utils';
import {BACKEND_URL, Status} from '../../const';

function Table() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getData(BACKEND_URL, setTasks);
  }, []);

  return (
    <table className="table">

      <thead>
        <tr>
          <th>Номер / Дата</th>
          <th>Тип задания / Автор</th>
          <th>Аккаунт / Терминал</th>
          <th>Статус</th>
        </tr>
      </thead>

      <tbody>
      {
        tasks.map((task) => (
          <tr key={task.id}>
            <td>
              <span>№{task.id}</span>
              <time>{getFormattedDate(task.created_date)}</time>
            </td>
            <td>
              <span>{task.order_type.name}</span>
              <span>{`${task.created_user.surname} ${task.created_user.name[0]}.${task.created_user.patronymic[0]}.`}</span>
            </td>
            <td>
              <span>{task.account.name}</span>
              <span>{task.terminal.name}</span>
            </td>
            <td>
              {Status[task.status]}
            </td>
          </tr>
        ))
      }
      </tbody>

    </table>
  );
}

export default Table;
