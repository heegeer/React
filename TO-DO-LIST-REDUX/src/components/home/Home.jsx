import Form from "../form/Form";
import TodoList from "../todolist/TodoList";

const Home = () => {
    return (
        <>
            <Form />
            <TodoList isDone={false} />
            <TodoList isDone={true} />
        </>
    )
}

export default Home;