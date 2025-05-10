import "./header.css";
import { CgMail } from "react-icons/cg";
import emailjs from "emailjs-com";
import { useStore } from "../../store";
import { Bounce, ToastContainer, toast } from "react-toastify";

export const Header = ({ toggleTheme, isDarkMode }) => {
 
  const { filteredTodos } = useStore();
  const currentFilteredTodos = filteredTodos();
  const todosMessage = currentFilteredTodos
    .map(
      (todo, index) =>
        `${index + 1}. ${todo.text} - ${
          todo.completed ? "Completed" : "Pending"
        }`
    )
    .join("\n");

  const handleOnSubmit = () => {
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          message: todosMessage,
        },
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
           toast.success(`Success!`, {
           position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          });
         
          console.log(result.text);
        },
        (error) => {

         
          toast.error(error.text, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          });
        }
      );
  };
  return (
    <div className="header">
      <h1>TODO</h1>
      <div className="con">
        <div className="icon">
          <CgMail onClick={handleOnSubmit} />
          <ToastContainer />
        </div>
        <div className="light-icon" onClick={toggleTheme}>
          {isDarkMode ? "☀️" : "🌙"}
        </div>
      </div>
    </div>
  );
};
