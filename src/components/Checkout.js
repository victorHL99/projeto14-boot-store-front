import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

function Checkout(){

    const navigate = useNavigate();


    return(
        <>
        <Header/>


        <Main>
            <button onClick={()=>{navigate('/')}}>Voltar para home</button>
        </Main>

        <Footer/>

        </>
    )
}

const Main = styled.main`

    padding-top: 250px;



`


export default Checkout;