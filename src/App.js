import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Usestate from "./components/Usestate";
import Useinput from "./components/Useinput";
import Usetabs from "./components/Usetabs";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Usestate />} />
            </Routes>
            <Useinput />
            <Usetabs />
        </BrowserRouter>
    );
};

export default App;
