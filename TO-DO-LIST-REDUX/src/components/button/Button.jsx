import { useDispatch } from "react-redux";
import { changeDone } from "../../redux/modules/todos";
import DoneBtn from "./styled";

function Button ({list}) { 

  const dispatch = useDispatch();

  // [완료] 혹은 [취소] 버튼 눌렀을 때 실행됨
  const changeDoneHandler = (id) => {
    dispatch(changeDone(id))   
  }

  // 투두리스트를 완료했을 때
  if (list.isDone === false) {
    return (
      <DoneBtn 
        onClick={() => changeDoneHandler(list.id)}
        style={{backgroundColor: '#acaaed'}}
      >완료</DoneBtn>
    );

  // 투두리스트 완료를 취소했을 때
  } else if (list.isDone === true) {
    return (
      <DoneBtn 
        onClick={() => changeDoneHandler(list.id)}
        style={{backgroundColor: '#FF9F9F'}}
      >취소</DoneBtn>
    );
  }
}

export default Button;