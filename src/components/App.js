import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Home";
import Item from "./Item";
import Login from "./Login";
import Register from './Register';


function App(){
    console.log('entrou aqui')

    return(

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/item" element={<Item/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/cadastro" element={<Register/>}></Route>
            </Routes>
        
        </BrowserRouter>

    )
}

export default App;

