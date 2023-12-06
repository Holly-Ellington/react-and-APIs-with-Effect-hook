import React, { useEffect, useState } from "react";

function App() {
  const [toDos, setToDos] = useState([]); // initialize 

  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos?userId=2"
        );
        const todosFromAPI = await response.json();
        setToDos(todosFromAPI);
      } catch (error) {
        console.error("Error loading todos:", error);
      }
    }

    loadUsers();
  }, []); // the Empty dependency array to ensure useEffect runs only once

  return (
    <div className="App">
      <h1>To Do List</h1>
      <ul className="todo-list">
        {toDos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "",
            }}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

