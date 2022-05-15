import { useState, useEffect, useContext } from 'react';

import styled from 'styled-components';

import { HiMenu } from 'react-icons/hi';
import { BsCart2 } from 'react-icons/bs';
import TokenContext from './context/Token';

function Header (){

    return(

        <HeadPage>
            
            <HiMenu size={'30px'}/> 

            <div className={'logo'}>
                <h1 className='geek'>Geek</h1>
                <h1 className='store'>store</h1> 
            </div>
            
            <CartSummary/>

        </HeadPage>
    )
}

function CartSummary(){

    const [cartState, setCartState] = useState(false);

    const {shopCart, setItemShopCart} = useContext(TokenContext);

    return(
        <CartAndSummary cartState={cartState}>

            <BsCart2 className='cartIcon' onClick={()=> setCartState(!cartState)}/>

            <div className='cartResume'>

                <p>Resumo do seu pedido!</p>

                <div className='itemsOnResume'>

                {shopCart.map((item, index) => <ItemsCart key={index} item ={item}/>)}
           
                </div>
                
                <div className='totalAndSendCheckout'>
                    <p>Total: <span></span> </p>
                    <button>Finalizar compra</button>
                </div>
                
            </div>
            
        </CartAndSummary>
    )
}
function ItemsCart({item}){

    const {qtd, item:{imagesURL, name, price }} = item;

    return(
        <div className='item'>{qtd} x <img src={imagesURL}></img> <p>{name}</p> <p> R$ {price}</p></div>
    )
}

const HeadPage = styled.header`

    background-color: #5C3782;
    position: fixed;
    z-index: 2;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    margin-bottom: 150px;

    .logo{
        display: flex;
        flex-direction: row;
    }
    .logo .geek{
        font-family: 'Press Start 2P', cursive;
        color: green;
       
    }
    .logo .store{
         font-family: 'Parisienne';
         color: darkblue;
    }
`
const CartAndSummary= styled.nav`

    font-family: 'Lato', sans-serif;
    font-size: 15px;
    font-weight: bold;

    .cartIcon{
        color: #FFFFFF;
        font-size: 30px;
    }
    .cartResume{
        display: ${(props)=> props.cartState ? 'flex':'none'};
        width: 275px;
        height: 350px;
        position: absolute;
        right: 0;
        margin: 17px 3px 0 0;        
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        background-color:  	#5C3782;
        border-radius: 5px;
    }
    .cartResume p{
        padding: 5px 0 5px 0;
        color: #FFFFFF;
    }
    .itemsOnResume{
        height: 250px;
        display: flex;
        align-items: center;
        flex-direction: column;
        overflow: scroll;
    }
    .item{
        width: 240px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        margin-bottom: 5px;
        padding: 5px;
        border-radius: 5px;
        border: 1px solid #B0C4DE;
        background-color: #FFFFFF;
    }
    .item img{
        width: 40px;
    }
    .item p{
        display: flex;
        flex-direction: row;
        max-width: 10ch;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        margin-top: 0;
        color: #5C3782;
    }
    .totalAndSendCheckout p{
        width: 220px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        border-top: 1px solid white;
        padding: 5px 0 5px 0;
    }
    .totalAndSendCheckout button{
        background-color: #00FF00;
        color: black;
        width: 220px;
        border-radius: 5px;
        padding: 5px;
        margin-bottom: 10px;
        border: none;
    }
`

export default Header;