"use client";

import { TodoList } from '@/widgets/TodoList';

export default function Home() {
  return (
    <main className="min-h-screen p-6 bg-gray-100">
      <div className="container mx-auto">
        <TodoList />
      </div>
    </main>
  );
}
