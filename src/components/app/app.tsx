import React, {SyntheticEvent, useEffect, useMemo, useState} from 'react';
import './app.scss';
import Table from '../table/table';
import {BACKEND_URL, TASKS_PER_STEP_AMOUNT} from '../../const';
import {Task} from '../../types/task';
import {getData} from '../../utils';
import Select from '../select/select';
import Pagination from '../pagination/pagination';
import {PaginationData} from '../../types/pagination';

function App() {
  const [tasksAmount, setTasksAmount] = useState<number>(TASKS_PER_STEP_AMOUNT);
  const [currentPage, setCurrentPage] = useState(1);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [totalPageCount, setTotalPageCount] = useState(tasks.length / tasksAmount);

  useEffect(() => {
    getData(BACKEND_URL, setTasks);
  }, []);

  useEffect(() => {
    setTotalPageCount(Math.ceil(tasks.length / tasksAmount));
  }, [tasksAmount, tasks])

  const currentTasksData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * tasksAmount;
    const lastPageIndex = firstPageIndex + tasksAmount;
    console.debug('page part', tasks.slice(firstPageIndex, lastPageIndex));

    return tasks.slice(firstPageIndex, lastPageIndex);
  },[tasksAmount, tasks, currentPage, totalPageCount]);

  const onPaginationChange = (evt: SyntheticEvent, data: PaginationData) => {
    setCurrentPage(Number(data.activePage));
  };

  return (
    <div className="page container">
      <h1>Задания</h1>

      <Table tasks={currentTasksData}/>

      <div className="page__pagination">
        <Pagination
          tasksAmount={tasksAmount}
          onPageChange={onPaginationChange}
          totalPages={totalPageCount}
          currentPage={currentPage}
        />

        <Select setTasksAmount={setTasksAmount}/>
      </div>

    </div>
  );
}

export default App;
