import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import api from './api/api'

import Header from "./Header";
import Footer from "./Footer";
import TokenContext from "./context/Token";

function Register (){

    const navigate = useNavigate();
    const {setToken} = useContext(TokenContext)
    const [datasToRegister, setDatas] = useState({name:'', email:'', password:'', passwordConf:''});
    console.log(datasToRegister);

    function tryRegister(event){

        event.preventDefault();

        api
        .post('/register', datasToRegister)
            .then((response)=>{
                localStorage.setItem('token', `${response.data.tokenSession}`)
                setToken(response.data.tokenSession)
                console.log('O registro ta safe!', response.data); // apagar esse console
                
                navigate('/');
            })
            .catch((err) => {
                console.log('Erro ao cadastrar usuario', err)
            })
    }

    return(
        <>
            <Header/>

            <Main>
                <form onSubmit={tryRegister}>
                    <input type={'text'} placeholder={'Nome'} onChange={(e)=>{setDatas({...datasToRegister, name:e.target.value})}}></input>
                    <input type={'email'} placeholder={'E-mail'} onChange={(e)=>{setDatas({...datasToRegister, email:e.target.value})}}></input>
                    <input type={'password'} placeholder={'Senha'} onChange={(e)=>{setDatas({...datasToRegister, password:e.target.value})}}></input>
                    <input type={'password'} placeholder={'Confirme sua senha'} onChange={(e)=>{setDatas({...datasToRegister, passwordConf:e.target.value})}}></input>

                    <button>cadastrar</button>
                </form>

                <p>Já é cliente? <span onClick={()=> navigate('/login')} >Entrar</span></p>

            </Main>

            <Footer />
        </>
    )
}


const Main = styled.main `

    font-family: 'Lato', sans-serif;
    font-size: 15px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    form{
        display: flex;
        flex-direction: column;
        margin-top: 75px;

    }
    input{
        width: 330px;
        height: 40px;
        margin-bottom:10px;
        border-radius: 5px;
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        border: 1px solid #D5D5D5;
        
    }
    button{
        margin-top: 25px;
        margin-bottom: 25px;
        height: 40px;
        background-color: lightgreen;
        border-radius: 5px;
        color: #fff;
        border: none;
        font-size: 25px;
    }
   
    span{
        color: blue;
 
    }

`




export default Register;