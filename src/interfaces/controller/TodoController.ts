import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
} from "tsoa";
import { TodoAttributes } from "../db-models/TodoAttributes";
import {
  TodoAttributesService,
  TodoAttributesCreationParams,
} from "./../services/TodoServices";

@Route("todos")
export class TodoController extends Controller {
  @Get("{todoId}")
  public getTodo(
    @Path() todoId: number,
    @Query() task?: string,
  ): TodoAttributes {
    return new TodoAttributesService().get(todoId, task);
  }

  @SuccessResponse("201", "Created") // Custom success response
  @Post()
  public createTodo(@Body() requestBody: TodoAttributesCreationParams): void {
    this.setStatus(201); // set return status 201
    new TodoAttributesService().create(requestBody);
    return;
  }
}
