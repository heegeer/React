import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../../redux/modules/todos";
import Button from '../button/Button';
import './todolist.css';

function TodoList ({isDone}) {
    
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    // [삭제] 버튼 눌렀을 때 실행됨
    const deleteHandler = (id) => {
        dispatch(deleteTodo(id))
    }
   
    return (
        <div className="list">
            {/* 제목 변경-isDone이 false면 Working, true면 Done */}
            <h2>{ isDone ? "Done..! 🎉" : "Working.. 🔥"}</h2>
            <div className="list-container">
                {/* isDone 값 true/false에 따라 리스트를 필터링함 */}
                {todos.filter((list) => list.isDone === isDone)
                .map((list) => {
                    return (
                        <div className="list-container">
                            <div className="list-card">
                                <div className="list_text">
                                    <h2 className="todo-title">{list.title}</h2>
                                    <p className="todo-content">{list.content}</p>
                                </div>                        
                                <div className="todo-button">
                                    <button onClick={() => deleteHandler(list.id)} className="deleteBtn">삭제</button>
                                    <Button list={list} key={list.id}/>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TodoList;