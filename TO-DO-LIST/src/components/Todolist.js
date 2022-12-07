import '../App.css'

function Todo (props) {
    return(
      <div className="list-wrapper">
        <div className="list_text">
          <h2 className="todo-title">{props?.list?.title}</h2>
          <p className="todo-content">{props?.list?.content}</p>
        </div>
        <div className="todo-button">
          <button onClick={() => props.deleteHandler(props.list.id)} className="deleteBtn">삭제</button>
          <button onClick={() => props.doneHandler(props.list.id)} className="doneBtn">완료</button>
        </div>
      </div>
    );
};
  
  function Done (props) {
    return(
      <div className="list-wrapper">
        <div className="list_text">
          <h2 className="todo-title">{props?.list?.title}</h2>
          <p className="todo-content">{props?.list?.content}</p>
        </div>
        <div className="todo-button">
          <button onClick={() => props.deleteHandler(props.list.id)} className="deleteBtn">삭제</button>
          <button onClick={() => props.cancelHandler(props.list.id)} className="cancelBtn">취소</button>
        </div>
      </div>
    );
};

export {Todo, Done}