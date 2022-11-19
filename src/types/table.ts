export type TableRow = {
  tag: string,
  content: string | number,
  extraClasses?: string[]
}

export type TableCol = {
  rows: TableRow[]
}

export type TableCols = TableCol[];

export type TheadCol = {
  content: string, extraClasses?: string[]
}
