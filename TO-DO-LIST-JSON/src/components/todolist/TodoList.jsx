import TodoCard from "../todocard/TodoCard";
import { List } from "./styled"

function TodoList ({isDone}) {

    return (
        <List>
            {/* 제목 변경-isDone이 false면 Working, true면 Done */}
            <h2>{ isDone ? "Done..! 🎉" : "Working.. 🔥"}</h2>
            <TodoCard isDone={isDone}/>
        </List>
    );
};

export default TodoList;