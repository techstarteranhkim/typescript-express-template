/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import {
  TsoaRoute,
  fetchMiddlewares,
  ExpressTemplateService,
} from "@tsoa/runtime";
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TodoController } from "./../src/interfaces/controller/TodoController";
import type {
  Request as ExRequest,
  Response as ExResponse,
  RequestHandler,
  Router,
} from "express";

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
  TodoAttributes: {
    dataType: "refObject",
    properties: {
      id: { dataType: "double" },
      userId: { dataType: "double", required: true },
      task: { dataType: "string", required: true },
      isDone: { dataType: "boolean" },
      dueDate: {
        dataType: "union",
        subSchemas: [{ dataType: "datetime" }, { dataType: "string" }],
        required: true,
      },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "Pick_TodoAttributes.userId-or-task-or-dueDate_": {
    dataType: "refAlias",
    type: {
      dataType: "nestedObjectLiteral",
      nestedProperties: {
        userId: { dataType: "double", required: true },
        task: { dataType: "string", required: true },
        dueDate: {
          dataType: "union",
          subSchemas: [{ dataType: "string" }, { dataType: "datetime" }],
          required: true,
        },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  TodoAttributesCreationParams: {
    dataType: "refAlias",
    type: {
      ref: "Pick_TodoAttributes.userId-or-task-or-dueDate_",
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new ExpressTemplateService(models, {
  noImplicitAdditionalProperties: "throw-on-extras",
  bodyCoercion: true,
});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(app: Router) {
  // ###########################################################################################################
  //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
  //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
  // ###########################################################################################################

  app.get(
    "/todos/:todoId",
    ...fetchMiddlewares<RequestHandler>(TodoController),
    ...fetchMiddlewares<RequestHandler>(TodoController.prototype.getTodo),

    async function TodoController_getTodo(
      request: ExRequest,
      response: ExResponse,
      next: any,
    ) {
      const args: Record<string, TsoaRoute.ParameterSchema> = {
        todoId: {
          in: "path",
          name: "todoId",
          required: true,
          dataType: "double",
        },
        task: { in: "query", name: "task", dataType: "string" },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = templateService.getValidatedArgs({
          args,
          request,
          response,
        });

        const controller = new TodoController();

        await templateService.apiHandler({
          methodName: "getTodo",
          controller,
          response,
          next,
          validatedArgs,
          successStatus: undefined,
        });
      } catch (err) {
        return next(err);
      }
    },
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.post(
    "/todos",
    ...fetchMiddlewares<RequestHandler>(TodoController),
    ...fetchMiddlewares<RequestHandler>(TodoController.prototype.createTodo),

    async function TodoController_createTodo(
      request: ExRequest,
      response: ExResponse,
      next: any,
    ) {
      const args: Record<string, TsoaRoute.ParameterSchema> = {
        requestBody: {
          in: "body",
          name: "requestBody",
          required: true,
          ref: "TodoAttributesCreationParams",
        },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = templateService.getValidatedArgs({
          args,
          request,
          response,
        });

        const controller = new TodoController();

        await templateService.apiHandler({
          methodName: "createTodo",
          controller,
          response,
          next,
          validatedArgs,
          successStatus: 201,
        });
      } catch (err) {
        return next(err);
      }
    },
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
