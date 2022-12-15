import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../components/home/Home"
import Detail from "../components/detail/Detail"
import Header from "../components/header/Header"
import Edit from "../components/edit/Edit"

const Router = () => {
    return (
        <BrowserRouter>
            {/* Header는 어느 페이지에 가든 고정하기 위해서 Routes 안에 넣지 않았다 */}
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<Detail />} />
                <Route path="/edit/:id" element={<Edit />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;