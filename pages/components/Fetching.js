import React from "react";
import useSWR from "swr";
const todosEndpoint = "https://jsonplaceholder.typicode.com/todos";

const getData = async () => {
  const response = await fetch(todosEndpoint);
  return await response.json();
};
const TodoApp = () => {
  const { data: todos } = useSWR(todosEndpoint, getData);
  
        return (
            <div>
            {todos ? todos.map((todo) => {
                return(
                    <div>{todo.id}</div>
                )
            }) : null }
            </div>
        );
};
export default TodoApp;