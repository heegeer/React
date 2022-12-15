import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../components/home/Home"
import Detail from "../components/detail/Detail"
import Header from "../components/header/Header"

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;