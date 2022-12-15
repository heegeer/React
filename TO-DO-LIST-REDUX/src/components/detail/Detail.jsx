import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { deleteTodo, changeDone } from "../../redux/modules/todos";
import { StDetail, DetailBox, BtnBox, MoveBtn, DetailTextBox, ID, Title, Content, DeleteBtn, DoneBtn } from "./styled";
import styled from "styled-components";

function Detail()  {

    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const param = useParams();

    const todo = todos.find((list) => list.id === param.id);

    const deleteHandler = (id) => {
        navigate("/")
        dispatch(deleteTodo(id))
    }

    const changeDoneHandler = (id) => {
        dispatch(changeDone(id))   
      }

    return (
        <StDetail>
            <DetailBox>
                <BtnBox>
                    <Link to={"/"}>
                        <MoveBtn><span>이전으로</span></MoveBtn>
                    </Link>
                </BtnBox>
                <DetailTextBox>
                    <ID>ID: {todo.id.slice(0, 4)}</ID>
                    <h2>{ todo.isDone ? "Done..! 🎉" : "Working.. 🔥"}</h2>
                    <Title>{todo.title}</Title>
                    <Content>{todo.content}</Content>
                    <button onClick={() => navigate(`/edit/${todo.id}`)}>수정</button>     
                    <DeleteBtn onClick={() => deleteHandler(todo.id)}>삭제</DeleteBtn>
                    <DoneBtn backgroundColor={ todo.isDone ? "#FF9F9F" : "#acaaed"}
                    onClick={() => changeDoneHandler(todo.id)}>{ todo.isDone ? "취소" : "완료"}</DoneBtn>
                </DetailTextBox>
            </DetailBox>
        </StDetail>
    )
}

export default Detail;

// const DoneBtn = styled.button`
//     height: 35px;
//     width: 100px;
//     border-radius: 20px;
//     border: transparent;
//     color: white;
//     font-size: 16px;
//     font-weight: bold;
//     cursor: pointer;
//     background-color: ${(props) => props.backgroundColor};

//     :hover {
//         opacity: 0.8;
//     }
// `