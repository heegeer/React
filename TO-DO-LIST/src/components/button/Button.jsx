import './button.css'

function Button (props) { 

  const { list, changeDoneHandler } = props;

  if (list.isDone === false) {
    return (
      <button onClick={() => changeDoneHandler(list.id)} 
        style={{backgroundColor: '#acaaed'}}
        className="btn">완료</button>
    );

  } else if (list.isDone === true) {
    return (
      <button onClick={() => changeDoneHandler(list.id)} 
        style={{backgroundColor: '#FF9F9F'}}
        className="btn">취소</button>
    );
  }
}

export default Button;