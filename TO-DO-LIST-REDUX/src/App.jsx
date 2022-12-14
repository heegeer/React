import Header from "./components/header/Header";
import Form from "./components/form/Form";
import TodoList from "./components/todolist/TodoList";
import './App.css';

function App () {
  return (
    <div className="wrap">
      <Header />
      <Form />
      <TodoList isDone={false} />
      <TodoList isDone={true} />
    </div>
  );
};

export default App; 