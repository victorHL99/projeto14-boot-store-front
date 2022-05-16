import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsTrash } from 'react-icons/bs';

import Footer from "./Footer";
import Header from "./Header";
import TokenContext from "./context/Token";
import Loading from "./Loading";

function Checkout(){

    const navigate = useNavigate();
    const {shopCart, token} = useContext(TokenContext);
    const [loading, setLoading] = useState(true);
    const frete = 0;
    let total = 0;
    shopCart.forEach(element => {
        total += element.item.price * element.qtd;
    });
    console.log('token', token);

    setTimeout(()=>setLoading(false),1500);

    function finalize(){
        token.token === null
        ?navigate('/login/checkout')
        :navigate('/sucess')
    }

    return loading ? <Loading/>:
        <>
        <Body>

            <Header/>

            <Main>
                <p className="resume">Resumo da sua compra</p>
                <div className="summaryItems">

                    {shopCart.map((item, index) => <Items key={index} item={item}/>)}

                </div>
                <div className="resumeInfos">

                    <p>Total <span>{total.toFixed(2).replace('.',',')}</span></p>
                    <p>Frete <span>{frete.toFixed(2).replace('.',',')}</span></p>
                    <input type={'number'} placeholder={'digite seu cep'}></input>
                    
                    <button onClick={()=>{navigate('/')}}>Continuar comprando</button>
                    <button onClick={()=>finalize()}>finalizar</button>

                </div>
            </Main>

            <Footer/>
        </Body>
        

        </>
    
}

function Items({item}){

    const {qtd, item:{imagesURL, name, price }} = item;
    const total = (qtd*price).toFixed(2).replace('.',',');
    const {setItemShopCart} = useContext(TokenContext);


    function removeItem(name){

        const infocart = localStorage.getItem('onShopCart');
        const shopCartObj = JSON.parse(infocart);
        console.log('name::::::', name  )

        const newShopCart = shopCartObj.filter((value) => value.item.name !== name)

        setItemShopCart(newShopCart);


    }
    
    
    return(
        <Item>

            <img src={imagesURL} alt={`imagem do pro produto no carrinho`}/>
            <div>
                <p className="name">{name}</p> 
                <p className="price">{qtd} x R$ {price.toFixed(2).replace('.',',')} un</p> 
                <p className="total">Total: R$ {total}</p>
                <p className="trash" onClick={()=>removeItem(name)}>remover <BsTrash/></p>
            </div>
            
        
        </Item>
    )
}

const Body = styled.div`

    position: absolute;
    display: flex;
    

`


const Main = styled.main`

    margin-top: 65px;
    margin-bottom: 85px;
    width: 100vw;
    padding: 25px;
    


    .resume{
        margin: 10px 0 25px 0 ;
    }

    .resumeInfos p{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 10px;
    }
  
     
`
const Item = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 25px;
    padding: 15px;
    border-radius: 5px;
    border: 1px solid #B0C4DE;
    background-color: #FFFFFF;
    

    img{
        width: 100px;
    }
    div{
        width: 100%;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
    }
    .name{
        font-size: 18px;
        margin-bottom: 15px;
       
    }
    .price{
        font-size: 15px;
        margin-bottom: 15px;
    }
    .total{
        font-size: 15px;
    }
    .trash{
        margin-top: 10px;
    }

`


export default Checkout;