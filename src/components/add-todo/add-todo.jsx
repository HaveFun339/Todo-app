import { useState } from "react";
import "./add-todo.css";
import { useStore } from "../../store";


export const AddTodo = ({}) => {
  const [check, setCheck] = useState(false);
  const [newTodo, setNewTodo] = useState("");
const { addTodo } = useStore();
  return (
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
  );
};
