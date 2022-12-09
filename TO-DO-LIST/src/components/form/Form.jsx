import './form.css'

function Form(props) {
  const { title, content, inputContent, addHandler } = props;

  return(
    // 제목과 내용을 제출하는 부분
    <form className="form">
        <span>제목</span>
        <input id="title" name='title' method="post" value={title} onChange={inputContent}/>
        <span>내용</span>
        <input id="content" name='content' method="post" value={content} onChange={inputContent}/>
        <button className="plusBtn" onClick={addHandler}>추가하기</button>
    </form>
  );
};

export default Form;