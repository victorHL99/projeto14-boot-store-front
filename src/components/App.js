import { useState, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Item from "./Item";
import Login from "./Login";
import Register from './Register';
import TokenContext from "./context/Token";
import CadastroP from "./CadastroP";
import Checkout from "./Checkout";


function App(){
    const [token, setToken] = useState({token:null});
    const [shopCart, setItemShopCart] = useState([]);
    
    console.log('On App:', shopCart);
    return(
      
        <TokenContext.Provider value={{token, setToken, shopCart, setItemShopCart}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/item/:idItem" element={<Item/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/cadastro" element={<Register/>}></Route>
                    <Route path="/checkout" element={<Checkout/>}></Route>
                </Routes>
            
            </BrowserRouter>
        </TokenContext.Provider>
    )
}

export default App;

