import { useState, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Item from "./Item";
import Login from "./Login";
import Register from './Register';
import TokenContext from "./context/Token";
import CadastroP from "./CadastroP";

function App(){
    const [token, setToken] = useState({token:null});
    
    return(

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/item" element={<Item/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/cadastro" element={<Register/>}></Route>
                <Route path="/produto" element={<CadastroP/>}></Route>
            </Routes>
        
        </BrowserRouter>

    )
}

export default App;

