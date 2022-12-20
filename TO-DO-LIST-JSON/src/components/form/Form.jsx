// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { v4 as uuidv4 } from "https://jspm.dev/uuid";
// import { addTodo } from "../../redux/modules/todosSlice";
import useInput from "../../hooks/useInput";
import { StForm, PlusBtn } from "./styled";


function Form() {

  const [title, onChangeTitleHandler] = useInput();
  const [content, onChangeContetnHandler] = useInput();


  return(
    <StForm>
        <span>제목</span>
        <input id="title" name='title' method="post"
          type="text" value={title} onChange={onChangeTitleHandler} />
        <span>내용</span>
        <input id="content" name='content' method="post"
           type="text" vlaue={content} onChange={onChangeContetnHandler} />
        <PlusBtn>추가하기</PlusBtn>
    </StForm>
  );
};

export default Form;