import Form from "../form/Form";
import TodoList from "../todolist/TodoList";
import './home.css';

const Home = () => {
    return (
        <div className="wrap">
            <Form />
            <TodoList isDone={false} />
            <TodoList isDone={true} />
        </div>
    )
}

export default Home;