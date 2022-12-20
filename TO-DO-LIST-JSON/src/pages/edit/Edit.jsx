import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { editTodo } from "../../redux/modules/todosSlice";
import { StDetail, DetailBox, BtnBox, MoveBtn, DetailTextBox, ID, EditForm, TitleInput, ContentInput, Btn } from "./styled";

const Edit = () => {

    

    return (
        <StDetail>
            <DetailBox>
                <BtnBox>
                    
                </BtnBox>
               
            </DetailBox>
        </StDetail>
    )
}

export default Edit;