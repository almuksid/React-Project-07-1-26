import "./App.css";
// import RegistrationForm from "./components/formHandling/RegistrationForm";
import { RiReactjsLine } from "react-icons/ri";
import Todo from "./components/todo/Todo";

function App() {
  return (
    <>
      <h2 className="text-red-400 flex items-center justify-center gap-2 mt-5 flex items-center gap-2 text-2xl font-bold ">Todo App <RiReactjsLine className="text-red-400"/> </h2>
      <Todo/>
      {/* <RegistrationForm/> */}

    </>
  )
}

export default App;