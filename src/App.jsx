import React from "react";
import { useFetchTodosQuery } from "./redux/services/fetchquerry";
import "./App.css";

function App() {
  const { data: todos, error, isLoading } = useFetchTodosQuery();

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <p>Error loading todos</p>;

  return (
    <div className="App">
      {todos && todos.length > 0 ? (
        <div>
          {todos.map((todo) => (
            <div key={todo.id} className="bg-gray-400 mt-4 p-6">
             <h1>  {todo.title} </h1>
             <p>  {todo.body} </p>
            </div>
          ))}
        </div>
      ) : (
        <p>No todos found.</p>
      )}
    </div>
  );
}

export default App;
