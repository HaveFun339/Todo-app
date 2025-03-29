import "./footer.css";

export const Footer = ({ itemsLeft, filter, clearCompleted, setFilter }) => {
  return (
    <div className="footer">
      <div className="items-left">{itemsLeft()} items left</div>
      <div className="items-left-mob">{itemsLeft()}`s left</div>
      <div className="filter-buttons">
        <button
          onClick={() => setFilter("all")}
          className={`filter-button ${filter === "all" ? "active-filter" : ""}`}
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
  );
};
