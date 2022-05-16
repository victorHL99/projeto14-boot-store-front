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
                    <Input type={'text'} placeholder={'Nome'} onChange={(e)=>{setDatas({...datasToRegister, name:e.target.value})}}></Input>
                    <Input type={'email'} placeholder={'E-mail'} onChange={(e)=>{setDatas({...datasToRegister, email:e.target.value})}}></Input>
                    <Input type={'password'} placeholder={'Senha'} onChange={(e)=>{setDatas({...datasToRegister, password:e.target.value})}}></Input>
                    <Input type={'password'} placeholder={'Confirme sua senha'} onChange={(e)=>{setDatas({...datasToRegister, passwordConf:e.target.value})}}></Input>

                    <ButtonRegister><p>Cadastrar</p></ButtonRegister>
                </form>

                <p>Já é cliente? <span onClick={()=> navigate('/login/cadastro')} >Entrar</span></p>

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
    span{
        color: blue;
    }

`

const Input = styled.input`
    position: relative;
    z-index: 1;
    width: 326px;
    height: 58px;
    margin-bottom:13px;
    border-radius: 5px;
    background-color: #FFFFFF;
    
    font-family: 'Saira Stencil One', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    border: 1px solid #5C3782;
    cursor: text;
    
    

    &::placeholder {
        position: relative;
        color: #000000;
        width: 200px;
        height: 23px;
        left: 15px;
        font-family: 'Saira Stencil One', cursive;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
    }
`
const ButtonRegister = styled.button`
    background-color: #5C3782;
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border: 1px solid #5C3782;
    width: 300px;
    height: 46px;
    margin-top: 12px;
    margin-bottom: 25px;
    left:15px;
    cursor: pointer;

    p{
        position: relative;
        z-index: 1;
        font-family: 'Saira Stencil One', cursive;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
    }
`



export default Register;