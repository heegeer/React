import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { __getTodos, __deleteTodos } from "../../redux/modules/todosSlice";
import { StDetail, DetailBox, MoveBtn, BtnBox, DetailTextBox, ID, Title, Content, Btn } from "./styled";

function Detail()  {

    const { isLoading, error, todos } = useSelector((state) => state.todos)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const param = useParams();

    console.log(todos)

    useEffect(() => {
        dispatch(__getTodos());
        }, [dispatch]
    );

    if (isLoading) {
        return <div>로딩 중.....</div>
    }
    if (error) {
        return <div>{error.massage}</div>
    }

    const todo = todos.find((list) => list.id === param.id);

    const deleteHandler = (id) => {
        if ( window.confirm("정말 삭제하시겠습니까?")) {
            navigate("/")
            dispatch(__deleteTodos(id))
        }
    }


    return (
        <StDetail>
            <DetailBox>
                <BtnBox>
                    <Link to={"/"}>
                        <MoveBtn backgroundColor={"#8EC3B0"} >
                            <span>이전으로</span>
                        </MoveBtn>
                    </Link>
                </BtnBox>
                <DetailTextBox>
                    <ID>ID: {todo.id.slice(0, 8)}</ID>
                    <h2>{ todo.isDone ? "Done..! 🎉" : "Working.. 🔥"}</h2>
                    <Title>{todo.title}</Title>
                    <Content>{todo.content}</Content>
                    {/* Btn에 props로 backgroundColor를 전달함 */}
                    <Btn backgroundColor={"#f9ba86"} 
                    onClick={() => navigate(`/edit/${todo.id}`)}>수정</Btn>     
                    <Btn backgroundColor={"#8EC3B0"} 
                    onClick={() => deleteHandler(todo.id)}>삭제</Btn>
                    <Btn backgroundColor={ todo.isDone ? "#FF9F9F" : "#acaaed"}
                    >{ todo.isDone ? "취소" : "완료"}</Btn>
                </DetailTextBox>
            </DetailBox>
        </StDetail>
    )
}

export default Detail;