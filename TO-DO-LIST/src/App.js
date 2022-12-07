import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import {Todo, Done} from "./components/Todolist";
import './App.css'

function App () {

  const [todo, setTodo] = useState([
    {id: 1, title: '운동하기', content: '운동해서 체력 기르기', isDone: false},
    {id: 2, title: '코딩 공부하기', content: '열심히!', isDone: true},
  ]);

  const[title, setTitle] = useState('');
  const[content, setContent] = useState('');

  const addHandler = (e) => {
    if(e.target.name === 'title') {
      setTitle(e.target.value)
    } else if (e.target.name === 'content') {
      setContent(e.target.value)
    }
  }

  const addContent = () => {

    if( title !== '' && content !== '') {
    const newTodo = {
      id: todo.length + 1,
      title,
      // title: title,
      content,
      // content: content,
      isDone: false,
    }

    setTodo((abc) => {
      return [...abc, newTodo ]
    })

    //input창 지워주기
    setTitle('')
    setContent('')
    } else {
      alert('제목과 내용을 모두 입력해주세요')
    }
  }

  const deleteHandler = (id) => {
    // setTodo((abc) => {
    //   return abc.filter((def) => def.id !== id)
    // })
    const newTodolist = todo.filter((list) => list.id !== id);
    setTodo(newTodolist);
  }

  const cancelHandler = (id) => {
    let copy = [...todo]
    todo[id - 1].isDone = false;
    setTodo(copy);
  };

  const doneHandler = (id) => {
    let copy = [...todo]
    todo[id - 1].isDone = true;
    setTodo(copy);
  };

  return (
    <div className="wrap">
      <Header />
      <Form title={title} content={content} addContent={addContent} addHandler={addHandler}/>
      <div className="list">
        <h2>Working.. 🔥</h2>
        <div className="list-container">
          {todo.map((list) => {
            if (list.isDone === false) 
              return <Todo doneHandler={doneHandler} deleteHandler={deleteHandler} list={list} key={list.id} />
          })}
        </div>
      </div>

      {/* 완료 isDone flase->true로 바꾸고 map return에 조건(삼항연산자 혹은 if문) 달기 */}
      <div className="list">
        <h2>Done..! 🎉</h2>
        <div className="list-container">
          {todo.map((list) => {
            if (list.isDone === true) 
              return <Done cancelHandler={cancelHandler} deleteHandler={deleteHandler} list={list} key={list.id}  />
          })}
        </div>
      </div>

    </div>
  );
};

export default App; 