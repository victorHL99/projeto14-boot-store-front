import styled from "styled-components";

import loadingImg from '../assets/img/pacLoading.gif';

import Footer from "./Footer";
import Header from "./Header";

function Loading(){


    return(
        <>
        <Header/>
        
        <Main>
            <img src={loadingImg} alt='carregando'/>
        </Main>
        
        <Footer/>
    
        </>
    )
}

const Main = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
   
    img{
        width: 150px;
    }

`
export default Loading;