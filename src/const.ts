import {StatusType} from './types/task';
import {TheadCol} from './types/table';

const Status:StatusType = {
  new: { name: 'Новый', class: 'status--new' },
  assigned_to: { name: 'Назначено', class: 'status--assigned' },
  started: { name: 'Выполняется', class: 'status--started' },
  completed: { name: 'Выполнено', class: 'status--completed' },
  declined: { name: 'Отменено', class: 'status--declined'}
};

const columns: TheadCol[] = [
  { content: 'Номер / Дата', extraClasses: ['text-left', 'w-20'] },
  { content: 'Тип задания / Автор', extraClasses: ['text-left', 'w-30'] },
  { content: 'Аккаунт / Терминал', extraClasses: ['text-left', 'w-35'] },
  { content: 'Статус', extraClasses: ['text-center', 'w-15'] }
];

const BACKEND_URL = 'data/test_data.json';
const TASKS_PER_STEP_AMOUNT = 5;

export {
  Status,
  BACKEND_URL,
  columns,
  TASKS_PER_STEP_AMOUNT
};

