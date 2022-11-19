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
  const [tasksPerPageCount, setTasksPerPageCount] = useState<number>(TASKS_PER_STEP_AMOUNT);
  const [currentPage, setCurrentPage] = useState(1);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [totalPageCount, setTotalPageCount] = useState(tasks.length / tasksPerPageCount);

  useEffect(() => {
    getData(BACKEND_URL, setTasks);
  }, []);

  useEffect(() => {
    setTotalPageCount(Math.round(tasks.length / tasksPerPageCount));
  }, [tasksPerPageCount, tasks, currentPage])

  useEffect(() => {
    setCurrentPage(1);
  }, [tasksPerPageCount])

  const currentTasksData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * tasksPerPageCount;
    const lastPageIndex = firstPageIndex + tasksPerPageCount;

    return tasks.slice(firstPageIndex, lastPageIndex);
  },[tasksPerPageCount, tasks, currentPage]);

  const onPaginationChange = (evt: SyntheticEvent, data: PaginationData) => {
    setCurrentPage(Number(data.activePage));
  };

  return (
    <div className="page container">
      <h1>Задания</h1>

      <Table tasks={currentTasksData}/>

      <div className="page__pagination">
        <Pagination
          tasksPerPageCount={tasksPerPageCount}
          onPageChange={onPaginationChange}
          totalPages={totalPageCount}
          currentPage={currentPage}
        />

        <Select setTasksPerPageCount={setTasksPerPageCount}/>
      </div>

    </div>
  );
}

export default App;
