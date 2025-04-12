import React, { useState } from "react";
import "./app.css";
import { useStore } from "./store";
import { Header, TodoList, Footer, AddTodo } from "./components";
import emailjs from 'emailjs-com';
export const App = () => {
  const { toggleComplete, clearCompleted, itemsLeft, filteredTodos } = useStore();
  
  
  const [filter, setFilter] = useState("all");
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  const currentFilteredTodos = filteredTodos(filter);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  const handleOnSubmit = () => {
    // Format the todos into a string
    const todosMessage = currentFilteredTodos
      .map((todo, index) => `${index + 1}. ${todo.text} - ${todo.completed ? "Completed" : "Pending"}`)
      .join("\n");
  
    // Send the email using emailjs
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID, // Your EmailJS service ID
        import.meta.env.VITE_TEMPLATE_ID, // Your EmailJS template ID
        {
          message: todosMessage, // Pass the todos as the message
        },
        import.meta.env.VITE_PUBLIC_KEY // Your EmailJS public key
      )
      .then(
        (result) => {
          alert("Todos sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong!");
        }
      );
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
          <button onClick={handleOnSubmit}>text</button>
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
