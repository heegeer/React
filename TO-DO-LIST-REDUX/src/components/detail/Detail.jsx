import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { StDetail, DetailBox, BtnBox, MoveBtn, DetailTextBox, ID, Title, Content } from "./styled";

function Detail()  {

    const todos = useSelector((state) => state.todos);
    const param = useParams();

    const todo = todos.find((list) => list.id === param.id);

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
                    <Title>{todo.title}</Title>
                    <Content>{todo.content}</Content>
                </DetailTextBox>
            </DetailBox>
        </StDetail>
    )
}

export default Detail;