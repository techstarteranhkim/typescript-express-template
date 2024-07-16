"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoAttributesService = void 0;
class TodoAttributesService {
    get(id, task) {
        return {
            id,
            userId: 2,
            task: task !== null && task !== void 0 ? task : "John Snow",
            dueDate: "today",
        };
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    create(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    todoCreationParams) {
        return {
            id: Math.floor(Math.random() * 10000),
            userId: Math.floor(Math.random() * 20000),
            task: "Task" + Math.floor(Math.random() * 10000),
            isDone: true,
            dueDate: "today",
        };
    }
}
exports.TodoAttributesService = TodoAttributesService;
