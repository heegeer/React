import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { __getTodos, __editTodos } from "../../redux/modules/todosSlice";
import { StDetail, DetailBox, BtnBox, MoveBtn, DetailTextBox, ID, EditForm, TitleInput, ContentInput, Btn } from "./styled";

const Edit = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(__getTodos());
        }, [dispatch]
    );
    
    const navigate = useNavigate();
    const param = useParams();
    const { error, todos } = useSelector((state) => state.todos)

    const todo = todos.find((list) => list.id === param.id);

    const [title, setTitle] = useState(todo.title);
    const [content, setContent] = useState(todo.content);

    if (error) {
        return <div>{error.massage}</div>
    }

    // input 창에 제목과 내용을 입력했을 때 입력값 가져오기
    const inputContent = (e) => {
        if (e.target.name === 'title') {
          setTitle(e.target.value)
        } else if (e.target.name === 'content') {
          setContent(e.target.value)
        }
    }

    const editHandler = (e) => {
    e.preventDefault();
    navigate(`/${todo.id}`)

    dispatch(
      __editTodos({
        id: todo.id,
        title: title,
        content: content,
        isDone: todo.isDOne,
      })
    )

    // 추가하기 버튼 클릭 후 input 창 비우기
    setTitle('')
    setContent('')
  }
    

    return (
        <StDetail>
            <DetailBox>
                <BtnBox>
                    <Link to={`/${todo.id}`}>
                        <MoveBtn><span>이전으로</span></MoveBtn>
                    </Link>
                </BtnBox>
                <DetailTextBox>
                    <ID>ID: {todo.id.slice(0, 8)}</ID>
                    <h2>{ todo.isDone ? "Done..! 🎉" : "Working.. 🔥"}</h2>
                    <EditForm>
                        {/* value에 title과 content의 useState(초기값)이 들어온다 */}
                        {/* autoFoucs로 컴포넌트가 렌더링될 때 title input창에 자동으로 포커스하기 */}
                        <TitleInput id="title" value={title} name='title' method="post" onChange={inputContent} autoFocus />
                        <ContentInput id="coneent" value={content} name='content' type="text" method="post" onChange={inputContent} />
                    </EditForm>
                    <Btn backgroundColor={"#8EC3B0"} 
                    onClick={editHandler}>수정하기</Btn>
                </DetailTextBox>
            </DetailBox>
        </StDetail>
    )
}

export default Edit;