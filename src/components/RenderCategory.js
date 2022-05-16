import styled from 'styled-components';
import {useContext, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import TokenContext from './context/Token';

export default function Category({category, idURL, name, img}) {

    const context = useContext(TokenContext);

    const navigate = useNavigate();
    console.log(context.token);

    useEffect(()=>{
        
    },[context.token]);
    
    function navigateToProduct() {
        const config ={
            headers: {
                Authorization: `Bearer ${context.token}`
            }
        }
            console.log(context.token)
            window.location.href = `/item/${idURL}`;
        }

    
    


    return(
        <div onClick={()=>{navigateToProduct()}}>
            <ButtonCategory>{name}</ButtonCategory>
        </div>
    )
}

const ButtonCategory = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size:15px;
    margin-bottom: 5px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #B0C4DE;
    background-color: #FFFFFF;
    width: 250px;
    height: 50px;
    cursor: pointer;
    &:hover{
        background-color: #B0C4DE;
    }
    `
