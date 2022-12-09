import './todocard.css'
import Button from '../button/Button';

function TodoCard (props) {

  const { list, deleteHandler, changeDoneHandler } = props;

    return(
      // 투두리스트 카드 한 개
      <div className="list-container">
        <div className="list-card">
          <div className="list_text">
            <h2 className="todo-title">{list.title}</h2>
            <p className="todo-content">{list.content}</p>
          </div>
          <div className="todo-button">
            <button onClick={() => deleteHandler(list.id)} className="deleteBtn">삭제</button>
            <Button changeDoneHandler={changeDoneHandler} list={list} key={list.id} />
          </div>
        </div>
      </div>
    );
};

export default TodoCard;