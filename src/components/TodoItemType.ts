export type TodoList = {
  id: number,
  checked: boolean
  contents: string,
  time: number
}

export type reducerType = {
  type: string,
  data: number | TodoList
}