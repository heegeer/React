import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { __getTodos } from "../../redux/modules/todosSlice";
import { ListContainer, ListCard, Detail, ListText, TodoTitle, TodoContent, TodoBtns, Btn } from "./styled"

const TodoCard = ({isDone}) => {

    const dispatch = useDispatch();
    const { isLoading, error, todos } = useSelector((state) => state.todos)

    useEffect(() => {
        dispatch(__getTodos());
        }, [dispatch]
    );

    console.log(todos)

    if (isLoading) {
        return <div>로딩 중.....</div>
    }
    if (error) {
        return <div>{error.massage}</div>
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
                                    >삭제</Btn>
                                    <Btn backgroundColor={ list.isDone ? "#FF9F9F" : "#acaaed"}
                                    >{ list.isDone ? "취소" : "완료"}</Btn>
                                </TodoBtns>
                            </ListCard>
                    );
                })}
        </ListContainer>
    )
}

export default TodoCard;