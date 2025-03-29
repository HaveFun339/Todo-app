import "./header.css";

export const Header = ({ toggleTheme, isDarkMode }) => {
  return (
    <div className="header">
      <h1>TODO</h1>
      <div className="light-icon" onClick={toggleTheme}>
        {isDarkMode ? "☀️" : "🌙"}
      </div>
    </div>
  );
};
