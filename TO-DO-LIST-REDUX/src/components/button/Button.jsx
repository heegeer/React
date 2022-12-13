import './button.css'

function Button ({list}) { 

  // 투두리스트를 완료했을 때
  if (list.isDone === false) {
    return (
      <button  
        style={{backgroundColor: '#acaaed'}}
        className="btn">완료</button>
    );

  // 투두리스트 완료를 취소했을 때
  } else if (list.isDone === true) {
    return (
      <button 
        style={{backgroundColor: '#FF9F9F'}}
        className="btn">취소</button>
    );
  }
}

export default Button;