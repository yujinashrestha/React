import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../feature/todoslice';

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleUpdate = (id, text) => {
    dispatch(updateTodo({ id, text }));
  };

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 text-center">Todo List</h2>

      {todos.map((todo) => (
        <div
          className="flex items-center gap-3 mb-3"
          key={todo.id}
        >
          <input
            className="flex-1 border border-gray-300 rounded px-3 py-2 text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            value={todo.text}
            onChange={(e) => handleUpdate(todo.id, e.target.value)}
          />

          <button
            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm"
            onClick={() => handleUpdate(todo.id, todo.text)}
          >
            Update
          </button>

          <button
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
            onClick={() => handleRemove(todo.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todo;
