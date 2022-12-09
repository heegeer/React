import TodoCard from '../todocard/TodoCard';
import './todolist.css';

function TodoList (props) {
    
    const { todo, isDone, changeDoneHandler, deleteHandler } = props;

        return (
            <div className="list">
                <h2>{ isDone ? "Done..! 🎉" : "Working.. 🔥"}</h2>
                <div className="list-container">
                    {todo.filter((list) => list.isDone === isDone)
                    .map((list) => {
                        return (<TodoCard changeDoneHandler={changeDoneHandler} deleteHandler={deleteHandler} list={list} key={list.id} />
                    );
                    })}
                </div>
            </div>
        );
};

export default TodoList;