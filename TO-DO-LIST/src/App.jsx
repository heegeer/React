import React, { useState } from "react";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import TodoList from "./components/todolist/TodoList";
import './App.css';
// import {inputContent, addHandler, deleteHandler, changeDoneHandler} from './App.js'

function App () {

  const [todo, setTodo] = useState([
    {id: 1, title: '운동하기', content: '운동해서 체력 기르자', isDone: false},
    {id: 2, title: '코딩 공부하기', content: '성실하게! 열심히!', isDone: true},
  ]);

  const[title, setTitle] = useState('');
  const[content, setContent] = useState('');

  // input 창에 제목과 내용을 입력했을 때 입력값 가져오기
  const inputContent = (e) => {
      if(e.target.name === 'title') {
      setTitle(e.target.value)
      } else if (e.target.name === 'content') {
      setContent(e.target.value)
      }
  }

  // [추가하기] 버튼 눌렀을 때 동작
  const addHandler = (e) => {
     
    // 제목과 내용 모두 입력되었을 때
    if ( title !== '' && content !== '' ) {
    e.preventDefault();

    const newTodo = {
      id: uuidv4(),
      title: title,
      content: content,
      isDone: false,
    }

    setTodo((copy) => {
      return [...copy, newTodo ]
    })

    //input창 지워주기
    setTitle('')
    setContent('')

    // 제목과 내용을 모두 입력하지 않았을 때
    } else if (title === '' && content === '') {
      e.preventDefault();
      document.querySelector('#title').focus()
      alert('제목과 내용을 모두 입력해주세요.')

    // 제목을 입력하지 않았을 때  
    } else if (content !== '') {
      document.querySelector('#title').focus()
      e.preventDefault();
      alert('제목을 입력해주세요.')

    // 내용을 입력하지 않았을 때   
    } else if (title !== '') {
      document.querySelector('#content').focus()
      e.preventDefault();
      alert('내용을 입력해주세요.')
    }
  }

  // [삭제] 버튼 눌렀을 때 동작
  const deleteHandler = (id) => {
      const newTodolist = todo.filter((list) => (list.id !== id));
      setTodo(newTodolist);
  }

  // [취소] [완료] 버튼 눌렀을 때 동작 - isDone: true, false 전환
  const changeDoneHandler = (id) => {
    let copy = [...todo]
    const isDoneChange = copy.map((list) => 
      list.id === id ? {...list, isDone: !list.isDone} : list
    );
    setTodo(isDoneChange);
  };

  return (
    <div className="wrap">
      <Header />
      <Form 
        title={title} 
        content={content} 
        inputContent={inputContent} 
        addHandler={addHandler} 
      />
      <TodoList 
        todo={todo} 
        isDone={false}
        changeDoneHandler={changeDoneHandler}
        deleteHandler={deleteHandler}
      />
      <TodoList 
        todo={todo} 
        isDone={true}
        changeDoneHandler={changeDoneHandler}
        deleteHandler={deleteHandler}
      />
    </div>
  );
};

export default App; 