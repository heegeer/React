import TodoCard from '../todocard/TodoCard';
import './todolist.css';

function TodoList (props) {
    
    const { todo, isDone, changeDoneHandler, deleteHandler } = props;

        return (
            <div className="list">
                {/* 제목 변경-isDone이 false면 Working, true면 Done */}
                <h2>{ isDone ? "Done..! 🎉" : "Working.. 🔥"}</h2>
                <div className="list-container">
                    {/* isDone 값 true/false에 따라 리스트를 필터링함 */}
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