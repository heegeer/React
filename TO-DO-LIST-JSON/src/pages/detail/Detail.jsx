import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { __getTodos, __deleteTodos, __changeDoneTodos } from "../../redux/modules/todosSlice";
import { StDetail, DetailBox, MoveBtn, BtnBox, DetailTextBox, ID, Title, Content, Btn } from "./styled";

function Detail()  {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(__getTodos());
        }, [dispatch]
    );
    
    const { isLoading, error, todos } = useSelector((state) => state.todos)
    console.log("todos:",todos)
    const navigate = useNavigate();
    const param = useParams();
   
    const todo = todos.find((list) => list.id === param.id);
    // console.log("todo:",todo)

    if (isLoading) {
       return <div/>
    }
    
    if (error) {
        return <div>{error.massage}</div>
    }

    // [삭제] 버튼 눌렀을 때 실행됨
    const deleteHandler = (id) => {
        if ( window.confirm("정말 삭제하시겠습니까?")) {
            navigate("/")
            dispatch(__deleteTodos(id))
        }
    }

    // [완료] 또는 [취소] 버튼 눌렀을 때 실행됨
    const changeDoneHandler = (switchTodo) => {
        dispatch(__changeDoneTodos(switchTodo))
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
                    <ID>ID: {todo?.id.slice(0, 8)}</ID>
                    <h2>{ todo?.isDone ? "Done..! 🎉" : "Working.. 🔥"}</h2>
                    <Title>{todo?.title}</Title>
                    <Content>{todo?.content}</Content>
                    {/* Btn에 props로 backgroundColor를 전달함 */}
                    <Btn backgroundColor={"#f9ba86"} 
                    onClick={() => navigate(`/edit/${todo.id}`)}>수정</Btn>     
                    <Btn backgroundColor={"#8EC3B0"} 
                    onClick={() => deleteHandler(todo.id)}>삭제</Btn>
                    <Btn backgroundColor={ todo?.isDone ? "#FF9F9F" : "#acaaed"}
                    onClick={() => changeDoneHandler({
                        id: todo.id, 
                        title: todo.title, 
                        content: todo.title, 
                        isDone: !todo.isDone                       
                    })}>{ todo?.isDone ? "취소" : "완료"}</Btn>
                </DetailTextBox>
            </DetailBox>
        </StDetail>
    )
}

export default Detail;