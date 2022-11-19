import {StatusType} from './types/task';
import {TheadCol} from './types/table';

const Status:StatusType = {
  new:  { name: 'Новый', class: 'status--new' },
  assigned_to: { name: 'Назначено', class: 'status--assigned' },
  started: { name: 'Выполняется', class: 'status--started' },
  completed: { name: 'Выполнено', class: 'status--completed' },
  declined: { name: 'Отменено', class: 'status--declined'}
};

const BACKEND_URL = 'data/test_data.json';

const columns: TheadCol[] = [
  { content: 'Номер / Дата', extraClasses: ['text-left'] },
  { content: 'Тип задания / Автор', extraClasses: ['text-left'] },
  { content: 'Аккаунт / Терминал', extraClasses: ['text-left']},
  { content: 'Статус', extraClasses: ['text-center'] },
];

const TASKS_PER_STEP_AMOUNT = 5;

export {
  Status,
  BACKEND_URL,
  columns,
  TASKS_PER_STEP_AMOUNT
};
