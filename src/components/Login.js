import { useState } from 'react';

import styled from 'styled-components';

import api from '.././api/api.js';

function Login (){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    /* async function handleSubmitLogin(e){
        e.preventDefault();

        try {
            await api.post('/login', {
                email,
                password
            });



        } catch (error) {

        }

    } */

    return (
        <>
            <header>teste</header> {/* FIXME VAI FAZER O HEADER AINDA */}
            <Main>
                <form>
                    {/* EMAIL */}
                    <input 
                        type="text" 
                        value={email}
                        placeholder="Email"
                        onChange={(e)=>setEmail(e.target.value)}
                    />

                    {/* SENHA */}
                    <input 
                        type="text" 
                        value={password}
                        placeholder="Senha"
                        onChange={(e)=>setPassword(e.target.value)}
                    />

                    {/* BOTÃO ACESSAR CONTA */}
                    <button type="submit" /* onClick={handleSubmitLogin} */ >Acessar conta</button>
                </form>

            </Main>
        </>

    )
}

export default Login;

const Main = styled.main`
    width: 100vw;
    height: 100vh;


`