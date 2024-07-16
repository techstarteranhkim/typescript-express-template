import { TodoAttributes } from "../db-models/TodoAttributes";

export type TodoAttributesCreationParams = Pick<
  TodoAttributes,
  "userId" | "task" | "dueDate"
>;

export class TodoAttributesService {
  public get(id: number, task?: string): TodoAttributes {
    return {
      id,
      userId: 2,
      task: task ?? "John Snow",
      dueDate: "today",
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public create(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    todoCreationParams: TodoAttributesCreationParams,
  ): TodoAttributes {
    return {
      id: Math.floor(Math.random() * 10000),
      userId: Math.floor(Math.random() * 20000),
      task: "Task" + Math.floor(Math.random() * 10000),
      isDone: true,
      dueDate: "today",
    };
  }
}
