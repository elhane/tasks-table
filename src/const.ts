import {StatusType} from './types/task';

const Status:StatusType = {
  new: "Новый",
  assigned_to: "Назначено",
  started: "Выполняется",
  completed: "Выполнено",
  declined: "Отменено",
};

const BACKEND_URL = "data/test_data.json";

export {Status, BACKEND_URL};
