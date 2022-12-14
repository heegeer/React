import { useDispatch } from "react-redux";
import { changeDone } from "../../redux/modules/todos";
import './button.css'

function Button ({list}) { 

  const dispatch = useDispatch();

  // [완료] 혹은 [취소] 버튼 눌렀을 때 실행됨
  const changeDoneHandler = (id) => {
    dispatch(changeDone(id))   
  }

  // 투두리스트를 완료했을 때
  if (list.isDone === false) {
    return (
      <button  
        onClick={() => changeDoneHandler(list.id)}
        style={{backgroundColor: '#acaaed'}}
        className="btn">완료</button>
    );

  // 투두리스트 완료를 취소했을 때
  } else if (list.isDone === true) {
    return (
      <button 
        onClick={() => changeDoneHandler(list.id)}
        style={{backgroundColor: '#FF9F9F'}}
        className="btn">취소</button>
    );
  }
}

export default Button;