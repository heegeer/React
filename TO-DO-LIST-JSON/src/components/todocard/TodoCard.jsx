import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { __changeDoneTodos, __deleteTodos } from "../../redux/modules/todosSlice";
import { ListContainer, ListCard, Detail, ListText, TodoTitle, TodoContent, TodoBtns, Btn } from "./styled"

const TodoCard = ({isDone}) => {

    const dispatch = useDispatch();
    const { isLoading, error, todos } = useSelector((state) => state.todos)

    if (isLoading) {
        return <div>로딩 중입니다.....</div>
    }

    if (error) {
        return <div>{error.massage}</div>
    }

    // [삭제] 버튼 눌렀을 때 실행됨
    const deleteHandler = (id) => {
        if ( window.confirm("정말 삭제하시겠습니까?")) {
            dispatch(__deleteTodos(id))
        }
    }

    // [완료] 또는 [취소] 버튼 눌렀을 때 실행됨
    const changeDoneHandler = (switchTodo) => {
        dispatch(__changeDoneTodos(switchTodo))
    }
   
    return (
        <ListContainer>
            {/* isDone 값 true/false에 따라 리스트를 필터링함 */}
            {todos.filter((list) => list.isDone === isDone)
                .map((list) => {
                    return (
                            // isDone 값에 따라 [취소] 또는 [완료]로 버튼이 변경됨
                            <ListCard key={list.id}>
                                <Link to={`/${list.id}`}>
                                    <Detail><span>상세보기</span></Detail>
                                </Link>
                                <ListText>
                                    <TodoTitle>{list.title}</TodoTitle>
                                    <TodoContent>{list.content}</TodoContent>
                                </ListText>                        
                                <TodoBtns>
                                    {/* Btn에 props로 backgroundColor를 전달함 */}
                                    <Btn backgroundColor={"#8EC3B0"} 
                                     onClick={() => deleteHandler(list.id)}
                                    >삭제</Btn>
                                    <Btn backgroundColor={ list.isDone ? "#FF9F9F" : "#acaaed"}
                                     onClick={() => changeDoneHandler({
                                     id: list.id, 
                                     title: list.title, 
                                     content: list.title, 
                                     isDone: !list.isDone
                                     })}>{ list.isDone ? "취소" : "완료"}</Btn>
                                </TodoBtns>
                            </ListCard>
                    );
                })}
        </ListContainer>
    )
}

export default TodoCard;