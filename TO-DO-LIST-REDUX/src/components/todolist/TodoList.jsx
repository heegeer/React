import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodo, changeDone } from "../../redux/modules/todos";
import { List, ListContainer, ListCard, Detail, ListText, TodoTitle, TodoContent, TodoBtns, Btn } from "./styled"

function TodoList ({isDone}) {
    
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    // [삭제] 버튼 눌렀을 때 실행됨
    const deleteHandler = (id) => {
        dispatch(deleteTodo(id))
    }

    // [완료] 또는 [취소] 버튼 눌렀을 때 실행됨
    const changeDoneHandler = (id) => {
        dispatch(changeDone(id))   
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
                            <ListCard key={list.id}>
                                <Link to={`/${list.id}`}>
                                    <Detail><span>상세보기</span></Detail>
                                </Link>
                                <ListText>
                                    <TodoTitle>{list.title}</TodoTitle>
                                    <TodoContent>{list.content}</TodoContent>
                                </ListText>                        
                                <TodoBtns>
                                    <Btn backgroundColor={"#8EC3B0"} 
                                    onClick={() => deleteHandler(list.id)}>삭제</Btn>
                                    <Btn backgroundColor={ list.isDone ? "#FF9F9F" : "#acaaed"}
                                    onClick={() => changeDoneHandler(list.id)}>{ list.isDone ? "취소" : "완료"}</Btn>
                                </TodoBtns>
                            </ListCard>
                    );
                })}
            </ListContainer>
        </List>
    );
};

export default TodoList;