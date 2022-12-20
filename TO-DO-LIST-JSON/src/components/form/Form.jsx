// import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import useInput from "../../hooks/useInput";
import { __postTodos } from "../../redux/modules/todosSlice";
import { StForm, PlusBtn } from "./styled";


function Form() {

  const dispatch = useDispatch();

  // input 창에 제목과 내용을 입력했을 때 입력값 가져오기
  const [title, setTitle, onChangeTitleHandler] = useInput();
  const [content, setContent, onChangeContetnHandler] = useInput();

  const addHandler = (e) => {
    e.preventDefault();

    dispatch(
      __postTodos({
        id: uuidv4(),
        title: title,
        content: content,
        isDone: false,
      })
    )

    // 추가하기 버튼 클릭 후 input 창 비우기
    setTitle('')
    setContent('')
  }

  return(
    <StForm>
        <span>제목</span>
        <input id="title" name='title' method="post"
          type="text" value={title} onChange={onChangeTitleHandler} />
        <span>내용</span>
        <input id="content" name='content' method="post"
           type="text" vlaue={content} onChange={onChangeContetnHandler} />
        <PlusBtn onClick={addHandler}>추가하기</PlusBtn>
    </StForm>
  );
};

export default Form;