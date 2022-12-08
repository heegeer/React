import './button.css'

function Button (props) { 

    const { list, doneHandler, cancelHandler } = props;

    if (list.isDone === false) {
      return (
        <button onClick={() => doneHandler(list.id)} 
          style={{backgroundColor: '#acaaed'}}
          className="btn">완료</button>
      );
  
    } else if (list.isDone === true) {
      return (
        <button onClick={() => cancelHandler(list.id)} 
          style={{backgroundColor: '#FF9F9F'}}
          className="btn">취소</button>
      );
    }
}

export default Button;