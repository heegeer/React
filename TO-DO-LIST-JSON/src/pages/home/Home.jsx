import Form from "../../components/form/Form";
import TodoList from "../../components/todolist/TodoList";

const Home = () => {
  return (
    <>
      <Form />
      <TodoList isDone={false} />
      <TodoList isDone={true} />
    </>
  );
};

export default Home;
