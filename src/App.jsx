import { useState } from "react";
import "./App.css";
import { useStore } from "./store";
import { Header, TodoList, Footer, AddTodo } from "./components";

export const App = () => {
  const { toggleComplete, clearCompleted, itemsLeft, filteredTodos } =
    useStore();

  const [filter, setFilter] = useState("all");
  const [isDarkMode, setIsDarkMode] = useState(true);

  const currentFilteredTodos = filteredTodos(filter);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className="conta1">
      <div className={isDarkMode ? "dark-mode" : "light-mode"}>
        <div className="photo"></div>

        <div className="cont1">
          <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />

          <AddTodo />
          <TodoList
            currentFilteredTodos={currentFilteredTodos}
            toggleComplete={toggleComplete}
          />

          <Footer
            itemsLeft={itemsLeft}
            filter={filter}
            clearCompleted={clearCompleted}
            setFilter={setFilter}
          />
        </div>
      </div>
    </div>
  );
};
