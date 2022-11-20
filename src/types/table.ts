export type TableRow = {
  tag: string,
  content: string | number,
  extraClasses?: string[],
  dataCssTitle?: string,
}

export type TableCol = {
  rows: TableRow[],
  extraClasses: string[],
  dataCssTitle: string | number,
  link?: string
}

export type TableCols = TableCol[];

export type TheadCol = {
  content: string,
  extraClasses?: string[],
}
