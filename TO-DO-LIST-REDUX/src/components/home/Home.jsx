import Form from "../form/Form";
import TodoList from "../todolist/TodoList";

const Home = () => {
    return (
        <div>
            <Form />
            <TodoList isDone={false} />
            <TodoList isDone={true} />
        </div>
    )
}

export default Home;