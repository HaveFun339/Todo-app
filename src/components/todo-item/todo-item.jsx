import React from 'react'
import "./todo-item.css"
import { useStore } from "../../store";

export const TodoItem = ({todo,index}) => {
   const {toggleComplete} = useStore();
  return (
   
    <div className="inc" >
    <label className="custom-checkbox">
      <input
        onChange={() => toggleComplete(index)}
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
  )
}
