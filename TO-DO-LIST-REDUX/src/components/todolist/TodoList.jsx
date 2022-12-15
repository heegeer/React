import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodo } from "../../redux/modules/todos";
import Button from '../button/Button';
import { List, ListContainer, ListCard, Detail, ListText, TodoTitle, TodoContent, TodoBtns, DeleteBtn } from "./styled"

function TodoList ({isDone}) {
    
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    // [삭제] 버튼 눌렀을 때 실행됨
    const deleteHandler = (id) => {
        dispatch(deleteTodo(id))
    }
   
    return (
        <List>
            {/* 제목 변경-isDone이 false면 Working, true면 Done */}
            <h2>{ isDone ? "Done..! 🎉" : "Working.. 🔥"}</h2>
            <ListContainer>
                {/* isDone 값 true/false에 따라 리스트를 필터링함 */}
                {todos.filter((list) => list.isDone === isDone)
                .map((list) => {
                    return (
                            <ListCard>
                                <Link to={`/${list.id}`}>
                                    <Detail><span>상세보기</span></Detail>
                                </Link>
                                <ListText>
                                    <TodoTitle>{list.title}</TodoTitle>
                                    <TodoContent>{list.content}</TodoContent>
                                </ListText>                        
                                <TodoBtns>
                                    <DeleteBtn onClick={() => deleteHandler(list.id)}>삭제</DeleteBtn>
                                    <Button list={list} key={list.id}/>
                                </TodoBtns>
                            </ListCard>
                    );
                })}
            </ListContainer>
        </List>
    );
};

export default TodoList;