import React, { FC } from "react";
import { Routes , Route} from "react-router-dom";
import Home from "../pages/Home/index"

const Index: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    )
}

export default Index