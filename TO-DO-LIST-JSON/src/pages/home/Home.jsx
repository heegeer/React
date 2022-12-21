import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { __getTodos } from "../../redux/modules/todosSlice";
import Form from "../../components/form/Form";
import TodoList from "../../components/todolist/TodoList";

const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getTodos());
    }, [dispatch]
  );

  return (
    <>
      <Form />
      <TodoList isDone={false} />
      <TodoList isDone={true} />
    </>
  );
};

export default Home;