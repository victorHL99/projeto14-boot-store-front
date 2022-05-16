import { useState,useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import styled from "styled-components";
import api from "./api/api";
import TokenContext from "./context/Token";
import Footer from "./Footer";
import Header from "./Header";
import Loading from "./Loading";

function Sucess (){

    const{idPedido} = useParams();
    const navigate = useNavigate();

    const {token} = useContext(TokenContext)
    const [loading, setLoading] = useState(true);
    const [segundos, setSegundos] = useState(5);
    

    
    setTimeout(() => navigate('/'), 5000);

    setInterval(()=>setSegundos(segundos-1),1000); 

    setTimeout(()=>setLoading(false),1500);

    useEffect(()=>{
        const config = {headers: {Authorization: `Bearer ${token}`}};
        
        api.post('/sucess/', {idPedido}, config)
            .then()
            .catch(alert("não foi possivel resgatar seu pedido, entre em contato com o suporte"))

    }, [])

    return loading
    ?<Loading />
    :<>

    <Body>
    <Header/>

        <Main>
            <h1>Status concluído</h1>
            <h1>redirecionando para home em {segundos}</h1>
            
        </Main>

      

    <Footer/>

   </Body>
    
    
    </>

}



const Body = styled.div`

    position: absolute;


`

const Main = styled.main`

    margin-top: 65px;
    margin-bottom: 85px;
    width: 100vw;
    padding: 25px;

`

export default Sucess;

