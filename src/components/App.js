import { useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Item from "./Item";
import Login from "./Login";
import Register from './Register';
import TokenContext from "./context/Token";

import Checkout from "./Checkout";
import Sucess from "./Sucess";


function App(){

    const infocart = localStorage.getItem('onShopCart');
    const shopCartObj = JSON.parse(infocart);
    const tokenSession = localStorage.getItem('token');

    const [token, setToken] = useState(tokenSession);
    const [shopCart, setItemShopCart] = useState(shopCartObj);

    if(shopCart === null){
        localStorage.setItem('onShopCart', '[]');

        const infoCartInitial = localStorage.getItem('onShopCart');
        const shopCartObjInitial = JSON.parse(infoCartInitial);
        
        setItemShopCart(shopCartObjInitial);
   }

    localStorage.setItem('onShopCart',  JSON.stringify(shopCart));

   
    return(
      
        <TokenContext.Provider value={{token, setToken, shopCart, setItemShopCart}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/item/:idItem" element={<Item/>}></Route>
                    <Route path="/login/:type" element={<Login/>}></Route>
                    <Route path="/cadastro" element={<Register/>}></Route>
                    <Route path="/checkout" element={<Checkout/>}></Route>
                    <Route path="/sucesso/:idPedido" element={<Sucess/>}></Route>
                </Routes>
            
            </BrowserRouter>
        </TokenContext.Provider>
    )
}

export default App;

