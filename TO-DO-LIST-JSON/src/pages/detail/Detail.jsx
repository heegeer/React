import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { deleteTodo, changeDone } from "../../redux/modules/todosSlice";
import { StDetail, DetailBox, MoveBtn, BtnBox, DetailTextBox, ID, Title, Content, Btn } from "./styled";

function Detail()  {

    

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
                    
                </DetailTextBox>
            </DetailBox>
        </StDetail>
    )
}

export default Detail;