export enum TodoStatus {
  Pending="pending",
  InProgress="inProgress",
  Completed="completed",
}

export interface Todo {
    id: number;
    title: string;
    description: string;
    status: TodoStatus;
}

export function getTodoStatusLength(): number {
  return Object.keys(TodoStatus).length / 2;
}