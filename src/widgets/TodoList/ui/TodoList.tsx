import React, { useState } from 'react';
import { Todo } from '@/entities/todo';
import { TodoItem } from '@/entities/todo';
import { TodoForm } from '@/features/todoCreation';
import { generateId } from '@/shared/lib/uid';

export const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: generateId(),
      text,
      completed: false,
      createdAt: new Date(),
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h1 className="mb-6 text-2xl font-bold text-center">Todo App</h1>
      <TodoForm onAdd={addTodo} />
      <div className="space-y-2">
        {todos.length === 0 ? (
          <p className="text-center text-gray-500">No todos yet. Add one above!</p>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))
        )}
      </div>
    </div>
  );
}; 