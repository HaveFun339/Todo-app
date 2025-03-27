import { create } from "zustand";

export const useStore = create((set, get) => ({
  bears: 10,
  todos: [
    { text: "Complete online JavaScript course", completed: true },
    { text: "Jog around the park 3x", completed: false },
    { text: "10 minutes meditation", completed: false },
    { text: "Read for 1 hour", completed: false },
    { text: "Pick up groceries", completed: false },
    { text: "Complete Todo App on Frontend Mentor", completed: false },
  ],
  games: [
    { id: 1, price: 0, name: "Fortnite" },
    { id: 2, price: 0, name: "CS2" },
    { id: 3, price: 100, name: "GTA VI" },
  ],
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
  minusBears: () => set((state) => ({ bears: state.bears - 1 })),
  removeGame: (id) => set((state) => ({ games: state.games.filter((game) => game.id !== id) })),
  addTodo: (newTodo, check) =>
    set((state) => ({ todos: [...state.todos, { text: newTodo, completed: check }] })),
  filteredTodos: (filter) => {
    const todos = get().todos;
    if (filter === "active") {
      return todos.filter((todo) => !todo.completed);
    } else if (filter === "completed") {
      return todos.filter((todo) => todo.completed);
    } else {
      return todos;
    }
  },
  toggleComplete: (index) =>
    set((state) => {
      const updatedTodos = [...state.todos];
      updatedTodos[index].completed = !updatedTodos[index].completed;
      return { todos: updatedTodos };
    }),
  clearCompleted: () => set((state) => ({ todos: state.todos.filter((todo) => !todo.completed) })),
  itemsLeft: () => get().todos.filter((todo) => !todo.completed).length,
  toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));