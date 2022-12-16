import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { addTodo } from "../../redux/modules/todos";
import { StForm, PlusBtn } from "./styled";

function Form() {

  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // input 창에 제목과 내용을 입력했을 때 입력값 가져오기
  const inputContent = (e) => {
      if (e.target.name === 'title') {
        setTitle(e.target.value)
      } else if (e.target.name === 'content') {
        setContent(e.target.value)
      }
  }

  // [추가하기] 버튼 클릭했을 때 실행됨
  const addHandler = (e) => {

    // 제목과 내용 모두 입력되었을 때
    if ( title && content ) {
      e.preventDefault();

      // 새로 작성된 투두리스트 객체를 
      // Action Creator인 addTodo 함수의 인자에 담아서 dispatch로 보냄
      dispatch(
        addTodo({
          id: uuidv4(),
          title: title,
          content: content,
          isDone: false,
        })
      )

      // 추가하기 버튼 클릭 후 input 창 비우기
      setTitle('')
      setContent('')

    // 제목과 내용을 모두 입력하지 않았을 때
    } else if ( !title && !content ) {
      e.preventDefault();
      document.querySelector('#title').focus()
      alert('제목과 내용을 모두 입력해주세요.')

    // 제목을 입력하지 않았을 때  
    } else if ( !content ) {
      document.querySelector('#title').focus()
      e.preventDefault();
      alert('제목을 입력해주세요.')

    // 내용을 입력하지 않았을 때     
    } else if ( !title ) {
    document.querySelector('#content').focus()
    e.preventDefault();
    alert('내용을 입력해주세요.')
    }
  }

  // 제목과 내용을 input에 입력해서 제출하는 부분
  return(
    <StForm>
        <span>제목</span>
        <input id="title" name='title' value={title} method="post" onChange={inputContent}/>
        <span>내용</span>
        <input id="content" name='content' value={content} method="post" onChange={inputContent}/>
        <PlusBtn onClick={addHandler}>추가하기</PlusBtn>
    </StForm>
  );
};

export default Form;