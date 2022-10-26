import { ITodos } from './../models/ITodos';

export const createRandomValue = (todos: ITodos[]): number => {
  let randomId: number = Math.floor(Math.random() * 100);
  todos.forEach((todo) => {
    if (randomId === todo.id) {
      createRandomValue(todos);
    }
  })
  return randomId;
}