import { createContext, useContext } from "react";

export const ToDoContext = createContext({
  //todos is a variable of type array
  todos: [
    //These are the objects
    {
      id: 1,
      todo: "Todo message",
      completed: false,
    },
  ],
  addToDo: (todo) => {},
  updateToDo: (id, todo) => {},
  deleteToDo: (id) => {},
  toggleComplete: (id) => {},
});

export const useToDo = () => {
  return useContext(ToDoContext);
};

export const ToDoProvider = ToDoContext.Provider;
