import React, { useState } from "react";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./../../redux/modules/todolist";
import './form.css'

function Form() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');



  // input 창에 제목과 내용을 입력했을 때 입력값 가져오기
  const inputContent = (e) => {
      if(e.target.name === 'title') {
      setTitle(e.target.value)
      } else if (e.target.name === 'content') {
      setContent(e.target.value)
      }
  }

  const addHandler = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: uuidv4(),
        title: title,
        content: content,
        isDone: false,
      })
    )
    
  }

  return(
    // 제목과 내용을 input에 입력해서 제출하는 부분
    <form className="form">
        <span>제목</span>
        <input id="title" name='title' value={title} method="post" onChange={inputContent}/>
        <span>내용</span>
        <input id="content" name='content' value={content} method="post" onChange={inputContent}/>
        <button onClick={addHandler} className="plusBtn">추가하기</button>
    </form>
  );
};

export default Form;