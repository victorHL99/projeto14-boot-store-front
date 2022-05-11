import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import api from './api/api'

import Header from "./Header";

function Register (){

    const navigate = useNavigate();

    const [datasToRegister, setDatas] = useState({name:'', email:'', password:'', passwordConf:''});
    console.l
    function tryRegister(event){

        event.preventDefault();

        api
        .post('/register', datasToRegister)
            .then((response)=>{
                console.log('O registro ta safe!', response.data);
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

         
        </>
        

    )
}


const Main = styled.main `




`




export default Register;