import { useState } from "react";

export default function TodoList() {
  const [todo, setTodo] = useState(["sample task"]); // ✅ holds list of tasks
  const [newTodo, setNewTodo] = useState("");         // ✅ holds current input

  const addNewTask = () => {
    if (newTodo.trim() === "") return;               // ✅ skip if empty
    setTodo([...todo, newTodo]);                     // ✅ add task to list
    setNewTodo("");                                  // ✅ clear input
  };

  return (
    <div>
      <input
        placeholder="add a task"
        value={newTodo}                              // ✅ controlled input
        onChange={(e) => setNewTodo(e.target.value)} // ✅ update input state
      />
      <button onClick={addNewTask}>Add Task</button> {/* ✅ call addNewTask */}

      <h4>Todo List</h4>
      <br />
      <br />
      <br />
      <br />
      <br />

      <hr />
      <h4>Task Todo</h4>
      <ul>
        {todo.map((item, index) => (
          <li key={index}>{item}</li>                // ✅ unique key for list
        ))}
      </ul>
    </div>
  );
}
