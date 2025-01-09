import { createToDo, deleteToDo, getToDos, updateToDo } from '../controllers/todosController.js';
import express from 'express';

const todosRouter = express.Router();
const routepath = '/';

todosRouter.route(routepath)
    .get(getToDos)
    .post(createToDo);

todosRouter.route(`${routepath}/:id`)
    .put(updateToDo)
    .delete(deleteToDo);

export { todosRouter };