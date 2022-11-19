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

export interface StatusType  {
  [key: string]: { [key: string]: string },
}
