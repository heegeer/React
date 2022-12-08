import React, { useState } from "react";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import Todolist from "./components/todolist/Todolist";
import './App.css'

function App () {

  const [todo, setTodo] = useState([
    {id: 0, title: '운동하기', content: '운동해서 체력 기르자', isDone: false},
    {id: 1, title: '코딩 공부하기', content: '열심히!', isDone: true},
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
  const addHandler = () => {
    if( title !== '' && content !== '') {
      const newTodo = {
        id: todo.length === 0 ? 0 : todo.length,
        title: title,
        content: content,
        isDone: false,
      }

      setTodo((copy) => {
        return [...copy, newTodo ]
      })
      console.log(todo)

      //input창 지워주기
      setTitle('')
      setContent('')

    } else {
      alert('제목과 내용을 모두 입력해주세요.')
    }
  }
  
  // [삭제] 버튼 눌렀을 때 동작
  const deleteHandler = (id) => {
    // setTodo((abc) => {
    //   return abc.filter((def) => def.id !== id)
    // })
    const newTodolist = todo.filter((list) => list.id !== id);
    setTodo(newTodolist);
    console.log(newTodolist)
  }

  // [취소] 버튼 눌렀을 때 동작
  const cancelHandler = (id) => {
    let copy = [...todo]
    // const newTodolist = copy.filter((list) => list.id === id);
    // console.log(newTodolist)
    todo[id].isDone = false;
    setTodo(copy);
    console.log(todo)
  };
  
  // [완료] 버튼 눌렀을 때 동작
  const doneHandler = (id) => {
    let copy = [...todo]
    todo[id].isDone = true;
    setTodo(copy);
    console.log(todo)
  };

  return (
    <div className="wrap">
      <Header />
      <Form title={title} content={content} inputContent={inputContent} addHandler={addHandler}/>
      <div className="list">
        <h2>Working.. 🔥</h2>
        <div className="list-container">
          {todo.map((list) => {
            if (list.isDone === false) 
              return <Todolist doneHandler={doneHandler} deleteHandler={deleteHandler} list={list} key={list.id} />
          })}
        </div>
      </div>

      {/* 완료 isDone flase->true로 바꾸고 map에 조건(삼항연산자 혹은 if문) 달기 */}
      <div className="list">
        <h2>Done..! 🎉</h2>
        <div className="list-container">
          {todo.map((list) => {
            if (list.isDone === true) {
              return <Todolist cancelHandler={cancelHandler} deleteHandler={deleteHandler} list={list} key={list.id} />
            }
          })}
        </div>
      </div>

    </div>
  );
};

export default App; 