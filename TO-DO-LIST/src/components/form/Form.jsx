import './form.css'

function Form(props) {
  const { title, content, inputContent, addHandler } = props;

  return(
    <form className="form">
      <span>제목</span>
      {/* input value에 입력한 값(=title)을 넣고 setTitle을 이용해서 value를 비워준다!*/}
        <input id="title" name='title' value={title} onChange={inputContent}/>
        <span>내용</span>
        <input id="content" name='content' value={content} onChange={inputContent}/>
        <button className="plusBtn" onClick={addHandler}>추가하기</button>
    </form>
  );
};

export default Form;