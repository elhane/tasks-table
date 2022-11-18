type CellType = {
  name: string,
  oguid: string
};

type User = CellType & {
  surname: string,
  patronymic: string,
}

export type Task = {
  id: number,
  oguid: string,
  status: string,
  order_type: CellType,
  terminal: CellType,
  account: CellType,
  created_user: User,
  created_date: number
};

interface ObjectKeys {
  [key: string]: string | number ;
}

export interface StatusType extends ObjectKeys {
  new: string,
  assigned_to: string,
  started: string,
  completed: string,
  declined: string,
}
