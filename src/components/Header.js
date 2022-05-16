import {useState, useContext, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import styled from 'styled-components';

import { HiMenu } from 'react-icons/hi';
import { BsCart2 } from 'react-icons/bs';
import {BsFillXCircleFill} from 'react-icons/bs';
import api from '../components/api/api.js';
import TokenContext from './context/Token';
import RenderCategory from './RenderCategory';


function Header (){

    const [menu, setMenu] = useState(false);
    const navigate = useNavigate();

    function ShowMenu(){
        const context = useContext(TokenContext);
        const [products, setProducts] = useState([]);



        useEffect(()=>{
            const config ={
                headers: {
                    Authorization: `Bearer ${context.token}`
                }
            }

            api.get('/', config)
            .then((response)=>{
                const ObjectProducts = response.data;
                setProducts(ObjectProducts);
            })
            .catch((error)=>{
                console.log(error);
            });

        },[context.token]);

        

        if(menu === false){
            return(
                <HiMenu onClick={()=>setMenu(true)} cursor={'pointer'} color={'#B295CF'} size={'30px'}/>
            )
        } else {
            return(
                <MenuBar>
                        <div className="Login" onClick={()=>{navigate("/login/")}}>
                            Fazer login
                        </div>
                    <div className="containerCategories" >
                        {products.map((product, index)=> <RenderCategory key={index} category={product.category} idURL={product._id} name={product.name}/>)}
                    </div>
                    <div className="exit">
                        <BsFillXCircleFill cursor={'pointer'} onClick={()=>setMenu(false)} size={'30px'}/>
                    </div>
                </MenuBar>
            )
        }
    }
    
    return(
        <HeadPage>

            {ShowMenu()}


            <div className={'logo'} onClick={()=>{navigate("/")}}>
                <h1 className='geek'>Geek</h1>
                <h1 className='store'>store</h1> 
            </div>

            <CartSummary/>

        </HeadPage>
    )
}

function CartSummary(){

    const navigate = useNavigate()
    const [cartState, setCartState] = useState(false);

    const infocart = localStorage.getItem('onShopCart');
    const shopCart = JSON.parse(infocart);
    let total =  0;

    shopCart.forEach(element => total += element.item.price * element.qtd);


    return(
        <CartAndSummary cartState={cartState}>
            <div className='cart'>
            <BsCart2 className='cartIcon' onClick={()=> setCartState(!cartState)}/>
            <p className='cartQtd'>{shopCart.length}</p>
            </div>

            <div className='cartResume'>

                <p>Resumo do seu pedido!</p>

                <div className='itemsOnResume'>

                {shopCart.map((item, index) => <ItemsCart key={index} item ={item}/>)}

                </div>

                <div className='totalAndSendCheckout'>
                    <p>Total: <span> {total.toFixed(2).toString().replace('.',',')}</span> </p>
                    <button onClick={()=> navigate('/checkout')}>Finalizar compra</button>
                </div>

            </div>

        </CartAndSummary>
    )
}
function ItemsCart({item}){

    const {qtd, item:{imagesURL, name, price }} = item;
    const total = (price*qtd).toFixed(2).toString().replace('.',',');

    return(
        <div className='item'>{qtd} x <img src={imagesURL} alt={`imagem do pro produto no carrinho`}></img> <p>{name}</p> <p> R$ {total}</p></div>
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
    top: 0;
    .logo{
        display: flex;
        flex-direction: row;
        cursor:pointer;
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
    cursor:pointer;
    .cart{
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        height: 100%;
    }
    .cartIcon{
        color: #FFFFFF;
        font-size: 30px;
    }
    .cartQtd{
        color: #FFFFFF;
        background-color: red;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2px;
        border-radius: 50%;
        width: 20px;
        height: 20px;     
        
    }
    .cartResume{
        display: ${(props)=> props.cartState ? 'flex':'none'};
        width: 275px;
        height: 350px;
        position: absolute;
        right: 0;
        margin: 33px 3px 0 0;        
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
        cursor:pointer;
    }
    .totalAndSendCheckout button{
        background-color: #00FF00;
        color: black;
        width: 220px;
        border-radius: 5px;
        padding: 5px;
        margin-bottom: 10px;
        border: none;
        cursor:pointer;
    }
`

const MenuBar = styled.div`
    position: absolute;
    z-index: 3;
    top: 50px;
    left: 0;
    width: 350px;
    height: 500px;
    border: 10px;
    background: #B295CF;

    .exit{
        color:#9357CF;
        position: absolute;
        right: 10px;
        top:15px;
    }
    .containerCategories{
        position: absolute;
        background-color: #B295CF;
        top: 80px;
        width: 350px;
        height: 415px;
        display: flex;
        border:5px;
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: row;
        overflow: scroll;

    }
    
    .Login{
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        font-style: normal;
        border-radius: 5px;
        font-weight: 400;
        font-size: 20px;
        background-color: #9357CF;
        width: 300px;
        height: 60px;
        color: #FFFFFF;
        margin-bottom: 10px;
        cursor:pointer;
    }
`

export default Header; 