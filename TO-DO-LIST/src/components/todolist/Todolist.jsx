import './todolist.css'
import Button from '../button/Button';

function Todolist (props) {

  const { list, doneHandler, cancelHandler, deleteHandler } = props;

    return(
      <div className="list-container">
        <div className="list-card">
          <div className="list_text">
            <h2 className="todo-title">{list.title}</h2>
            <p className="todo-content">{list.content}</p>
          </div>
          <div className="todo-button">
            <button onClick={() => deleteHandler(list.id)} className="deleteBtn">삭제</button>
            <Button cancelHandler={cancelHandler} doneHandler={doneHandler} list={list} key={list.id} />
          </div>
        </div>
      </div>
    );
};
  
// function Done (props) {
//     return(
//       <div className="list-card">
//         <div className="list_text">
//           <h2 className="todo-title">{props.list.title}</h2>
//           <p className="todo-content">{props.list.content}</p>
//         </div>
//         <div className="todo-button">
//           <button onClick={() => props.deleteHandler(props.list.id)} className="deleteBtn">삭제</button>
//           <button onClick={() => props.cancelHandler(props.list.id)} className="cancelBtn">취소</button>
//         </div>
//       </div>
//     );
// };

export default Todolist;