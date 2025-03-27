import React, { useState } from "react";
import "./App.css";
import { useStore } from "./store/Store";


  export const App = () => {
    const { todos, addTodo, toggleComplete, clearCompleted, itemsLeft, filteredTodos } = useStore();
    const [newTodo, setNewTodo] = useState("");
    const [check, setCheck] = useState(false);
    const [filter, setFilter] = useState("all");
    const [isDarkMode, setIsDarkMode] = useState(true);
  
    // Отримуємо відфільтровані todos зі стану
    const currentFilteredTodos = filteredTodos(filter);
  
    const toggleTheme = () => {
      setIsDarkMode(!isDarkMode);
    };
  
    return (
      <div className="conta1">
      <div className={isDarkMode ? "dark-mode" : "light-mode"}>
        <div className="photo"></div>
  
        <div className="cont1">
          <div className="header">
            <h1>TODO</h1>
            <div className="light-icon" onClick={toggleTheme}>
              {isDarkMode ? "☀️" : "🌙"}
            </div>
          </div>
  
          <div className="inp-1">
            <label className="custom-checkbox">
              <input
                type="checkbox"
                checked={check}
                onChange={() => setCheck(!check)}
                className="hidden-checkbox"
              />
              <span className="checkmark"></span>
            </label>
            <input
              onChange={(e) => setNewTodo(e.target.value)}
              value={newTodo}
              type="text"
              placeholder="Create a new todo..."
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addTodo(newTodo, check);
                  setNewTodo("");
                  setCheck(false);
                }
              }}
            />
          </div>
  
          {currentFilteredTodos.map((todo, index) => (
            <div className="inc" key={index}>
              <label className="custom-checkbox">
                <input
                  onClick={() => toggleComplete(index)}
                  type="checkbox"
                  className="hidden-checkbox"
                  checked={todo.completed}
                />
                <span className="checkmark"></span>
              </label>
              <input
                type="text"
                value={todo.text}
                disabled
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              />
            </div>
          ))}
  
          <div className="footer">
            <div className="items-left">{itemsLeft()} items left</div>
            <div className="filter-buttons">
              <button
                onClick={() => setFilter("all")}
                className={`filter-button ${
                  filter === "all" ? "active-filter" : ""
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter("active")}
                className={`filter-button ${
                  filter === "active" ? "active-filter" : ""
                }`}
              >
                Active
              </button>
              <button
                onClick={() => setFilter("completed")}
                className={`filter-button ${
                  filter === "completed" ? "active-filter" : ""
                }`}
              >
                Completed
              </button>
            </div>
            <button onClick={clearCompleted} className="clear-completed">
              Clear Completed
            </button>
          </div>
        </div>
      </div>
      </div>
    );
  };