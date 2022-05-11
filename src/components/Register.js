import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import api from './api/api'

import Header from "./Header";

function Register (){

    const navigate = useNavigate();

    const [datasToRegister, setDatas] = useState({name:'', email:'', password:'', confPassword:''});

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

    function toLogin(){
        navigate('/');
    }
    

    return(
        <>
            <Header/>

            <Main>
                <form onSubmit={tryRegister}>
                    <input type={'text'} placeholder={'Nome'}></input>
                    <input type={'email'} placeholder={'E-mail'}></input>
                    <input type={'password'} placeholder={'Senha'}></input>
                    <input type={'password'} placeholder={'Confirme sua senha'}></input>

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