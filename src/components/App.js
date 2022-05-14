import { useState, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Item from "./Item";
import Login from "./Login";
import Register from './Register';
import TokenContext from "./context/Token";



function App(){
    const [token, setToken] = useState({token:null});
    
    
    return(
        <TokenContext.Provider value={{token, setToken}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/item" element={<Item/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/cadastro" element={<Register/>}></Route>
                </Routes>
            
            </BrowserRouter>
        </TokenContext.Provider>

    )
}

export default App;

