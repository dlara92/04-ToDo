import './styles.css';

import { Todo, TodoList } from './class';
import { crearTodoHtml } from './js/components';

export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);
// Si el primer argumento que regresa el forEach,
// es igual al argumento que se le envia mediante la funcion,
// se puede obiar toda la funcion tipo flecha y solamente se le indica la funcon a realizar

console.log('todos', todoList.todos);
