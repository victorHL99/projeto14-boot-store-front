import { useState, useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';


import Header from './Header';
import api from '.././components/api/api.js';
import Footer from './Footer';
import TokenContext from './context/Token.js';

function Login (){

    const navigator = useNavigate();
    const {type} = useParams();
    const {token, setToken, shopCart } = useContext(TokenContext);

    const [ user, setUser ] = useState({email:'', password:'', shopCart:shopCart})
    
    async function tryLogin(e){
        e.preventDefault();

        api.post('/login', user)
            .then((response)=>{
                const { tokenSession } = response.data;
                setToken({token:response.data});
                type === 'checkout' ? navigator('/checkout/finalize') : navigator("/");
            })

            .catch ((error)=> {
                alert("Ops! Infelizmente aconteceu um erro! Tente novamente!");
                console.log(error.response);
            });
    }

    return (
        <>
            <Header/> 
            <Main>
                <p className='user'>Já sou cliente</p>
                <form onSubmit={tryLogin}>
                    <Input type="text" value={user.email} placeholder="Email" onChange={(e)=>setUser({...user, email: e.target.value})}/>
                    <Input type="password" value={user.password} placeholder="Senha" onChange={(e)=>setUser({...user, password: e.target.value})}/>
                    <Button type="submit" ><p>Acessar conta</p></Button>
                </form>
                <p className='newUser'>Criar conta</p>
                
                <Navegate to='/cadastro'><ButtonRegister><p>Criar conta</p></ButtonRegister></Navegate>
                <Footer/>
            </Main>

        </>

    )
}

export default Login;

const Main = styled.main`
    padding-top:20px;
    position:absolute ;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .user {
        position: relative;
        top:70px;
        left: 25px;
        font-size: 20px;
        font-family: 'Saira Stencil One', cursive;
        color: #000000;
    }

    .newUser{
        position: relative;
        top:170px;
        left: 25px;
        font-size: 20px;
        font-family: 'Saira Stencil One', cursive;
        color: #000000;
    }
`


const Input = styled.input`
    position: relative;
    z-index: 1;
    width: 326px;
    height: 58px;
    left: 25px;
    top:90px;
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
        width: 60px;
        height: 23px;
        left: 15px;
        font-family: 'Saira Stencil One', cursive;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
    }
`
const Button = styled.button`
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
    left:39px;
    top: 90px;
    cursor: pointer;

    p{
        position: relative;
        z-index: 2;
        font-family: 'Saira Stencil One', cursive;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
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
    left:39px;
    top: 190px;
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

const Navegate = styled(Link)`
    text-decoration: none;

`