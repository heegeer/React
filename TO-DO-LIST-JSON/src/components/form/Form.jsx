import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import useInput from "../../hooks/useInput";
import { __postTodos } from "../../redux/modules/todosSlice";
import { StForm, PlusBtn } from "./styled";

// [추가하기] 버튼 클릭했을 때 실행됨
function Form() {

  const dispatch = useDispatch();

  // input 창에 제목과 내용을 입력했을 때 입력값 가져오기
  // custom hook 이용
  const [title, setTitle, onChangeTitleHandler] = useInput();
  const [content, setContent, onChangeContetnHandler] = useInput();

  const addHandler = (e) => {

    // 제목과 내용 모두 입력되었을 때
    if ( title && content ) {
      e.preventDefault();

      dispatch(
        __postTodos({
          id: uuidv4(),
          title: title,
          content: content,
          isDone: false,
        })
      )

      // 추가하기 버튼 클릭 후 input 창 비우기
      setTitle('')
      setContent('')

    // 제목과 내용을 모두 입력하지 않았을 때
    } else if ( !title && !content ) {
      e.preventDefault();
      document.querySelector('#title').focus()
      alert('제목과 내용을 모두 입력해주세요.')

    // 제목을 입력하지 않았을 때  
    } else if ( !content ) {
      document.querySelector('#title').focus()
      e.preventDefault();
      alert('제목을 입력해주세요.')

    // 내용을 입력하지 않았을 때     
    } else if ( !title ) {
      document.querySelector('#content').focus()
      e.preventDefault();
      alert('내용을 입력해주세요.')
    }
  }

  return(
    <StForm>
        <span>제목</span>
        <input id="title" name='title' method="post"
          type="text" value={title} onChange={onChangeTitleHandler} />
        <span>내용</span>
        <input id="content" name='content' method="post"
           type="text" value={content} onChange={onChangeContetnHandler} />
        <PlusBtn onClick={addHandler}>추가하기</PlusBtn>
    </StForm>
  );
};

export default Form;
