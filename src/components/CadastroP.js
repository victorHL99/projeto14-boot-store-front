import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import api from "./api/api";

function CadastroP (){
    const navigate = useNavigate();
    const [product, setProduct] = useState({imagesURL:'',name:'', category:'', price:'', description:'', qtsAvailables:'', technicalsInfos:{brand:'', material:'', warranty:''} })
    console.log('product ===>', product);

    function sendProduct(event){

        event.preventDefault();

        api.post('/cadastroP', product)
            .then(()=>{
                alert('Produto cadastrado com sucesso!');
                
            })
            .catch((err)=>{
                console.log('erro ao cadastrar produto: ', err);
            })
    }

    return (
        <Main>
            <h1>Tela de cadastro de produtos: </h1>

            <form onSubmit={sendProduct}>

                <input type={'text'} placeholder={'Image URL'} onChange={(e)=>{setProduct({...product, imagesURL:e.target.value})}}></input>
                <input type={'text'} placeholder={'Nome'} onChange={(e)=>{setProduct({...product, name:e.target.value})}}></input>
                <input type={'number'} placeholder={'preço'} onChange={(e)=>{setProduct({...product, price:e.target.value})}}></input>
                <input type={'text'} placeholder={'categoria: '} onChange={(e)=>{setProduct({...product, category:e.target.value})}}></input>
                <input type={'text'} placeholder={'descrição'} onChange={(e)=>{setProduct({...product, description:e.target.value})}}></input>
                <input type={'number'} placeholder={'quantidade'} onChange={(e)=>{setProduct({...product, qtsAvailables:e.target.value})}}></input>
                
                <h1> informações sobre marca e modelos </h1>

                <input type={'text'} placeholder={'marca'} onChange={(e)=>{setProduct({...product, technicalsInfos:{...product.technicalsInfos, brand:e.target.value}})}}></input>
                <input type={'text'} placeholder={'material'} onChange={(e)=>{setProduct({...product, technicalsInfos:{...product.technicalsInfos, material:e.target.value}})}}></input>
                <input type={'text'} placeholder={'garantia'} onChange={(e)=>{setProduct({...product, technicalsInfos:{...product.technicalsInfos, warranty:e.target.value}})}}></input>

                <button>cadastrar</button>
            </form>

        </Main>
        
    )
}


const Main = styled.main`

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;

    background-color: aliceblue;

`
export default CadastroP;