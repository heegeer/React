import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Header from "../header/Header"
import "./detail.css"

function Detail()  {

    const todos = useSelector((state) => state.todos);
    const param = useParams();

    const todo = todos.find((list) => list.id === param.id);
    console.log("param.id:", param.id)
    console.log("todo:", todo)
    console.log(todos)

    return (
        <div className="wrap">
            {/* <Header /> */}
            <div className="detail-container">
                <Link to={"/"}>이전으로</Link>
                <div>제목:{todo.title}</div>
                <div>내용:{todo.content}</div>
            </div>
        </div>
    )
}

export default Detail;