import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import styled from "styled-components";
import { MdStarHalf } from "react-icons/md";

import Loading from "./Loading";
import Header from "./Header";
import Footer from "./Footer";
import api from "./api/api";

import TokenContext from "./context/Token";


function Item(){

    const navigate = useNavigate();
    const {idItem} = useParams();

    const [itemInfos, setInfos] = useState({imagesURL:'', name:'', category:'', price:'', description:'', qtsAvailables:'',technicalsInfos:{brand:'', material:'', warranty:''}});
    
    const [itemToAdd, setItemOnCart] = useState({qtd:1, item:itemInfos});

    const {shopCart, setItemShopCart} = useContext(TokenContext);

    console.log('items to add: ', itemToAdd);

    function addItemShopCart(){
        setItemShopCart([...shopCart, itemToAdd]);
        navigate('/checkout')
    }


    useEffect(()=>{
        const config = {headers: {Authorization: `Bearer ${idItem}`}};
        api.get("/item", config)
            .then((response=>{
                setInfos(response.data)
                setItemOnCart({qtd:1, item:response.data})
            }))
            .catch((err)=>{console.log(err)});},
    []);

    return itemInfos.name === ''
    ?   <Loading/>
    :<>
        <Header/>

        <Main>
            <p className="category">categoria/{itemInfos.category}</p>
            <div className="primaryInfos">
                <img src={`${itemInfos.imagesURL}`} alt={`imagem do produto`}/>

                <div>
                    <p className="name">{itemInfos.name}</p>
                    <div className="infos">
                        <p className="price">R$ {itemInfos.price}</p>
                        <p className="available">disponiveis: {itemInfos.qtsAvailables}</p>
                        <p className="userRating">4,3 <MdStarHalf color="yellow"/></p>
                    </div>
                </div>

                <div className="sendInfos">
                    <p className="remove" onClick={()=>setItemOnCart({...itemToAdd, qtd:itemToAdd.qtd - 1})}>-</p>
                    <p className="number">{itemToAdd.qtd}</p>
                    <p className="add" onClick={()=>setItemOnCart({...itemToAdd, qtd:itemToAdd.qtd + 1})}>+</p>
                    <button onClick={() => addItemShopCart()}>Comprar</button>
                </div>
                
            </div>
            
            <div className="additlInfos">
                <p className="about">Descrição:</p>
                <p className="textAbout">{itemInfos.description}</p>

                <p className="infoTable">Detalhes tecnicos:</p>
                <div className="table">
                    
                    <p className="optionI"><span>Marca:</span> {itemInfos.technicalsInfos.brand}</p>
                    <p className="optionP"><span>Material:</span> {itemInfos.technicalsInfos.material}</p>
                    <p className="optionI"><span>Garantia:</span> {itemInfos.technicalsInfos.warranty}</p>
                </div>

            </div>

            
        </Main>
        <Footer/>
    </>
}

const Main = styled.main`
    font-weight: bold;
    width: 100%;
    height: 100vh;
    padding: 75px 15px 0px 15px;
    margin-bottom: 200px;
    

    .category{
        border-bottom: 2px solid #E6E6FA;
        padding-bottom: 10px;
        margin-bottom: 10px;
    }
    .primaryInfos{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        border: 1px solid #B0E0E6;
        border-radius: 5px;
    }
    .primaryInfos img{
        margin-bottom: 10px ;
        width: 150px;
    }
    .name{
        font-size: 15px;
        font-weight:bolder;

    }
    .infos{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        margin-top: 10px;  
       
    }
    .price  {
        
        font-size: 18px;
        margin-left: 15px;
       
    }
    .available{
        font-style: italic;
        font-size: 13px;
        color: #363636;
        
    }
    .userRating{
        font-style: italic;
        font-size: 13px;
        color: white;
        background-color: #363636;
        border-radius: 5px;
        padding: 2px;
    }
    button{
        margin-top: 10px;
        width: 100px;
        display: flex;
        background-color: #FF4500;
        border: none;
        border-radius: 5px;
        padding: 10px;
        font-size: 20px;
        color: #FFF;
        justify-content: center;
        margin-left: 15px;
    }
    .additlInfos{
        margin-top: 50px;
        
    }
    .textAbout{
        font-weight: normal;
        font-size: 17px;
        margin-top: 8px;
    }
    .table{
        font-size: 17px;
        width: 100%;
        border: 1px solid #B0E0E6;
        font-weight: normal;

    }
    .infoTable{
        margin: 25px 0 5px 0 ;
        padding-top: 13px;
        border-top: 2px solid #DCDCDC;
      
    }
    .optionI{
        background-color: #DCDCDC;
        padding: 8px 0 8px 5px;
    }
    .optionP{
        border-top: 1px solid #363636;
        border-bottom: 1px solid #363636;
        padding: 8px 0 8px 5px;
    }
    .table p span{
        font-weight: bold;
    }

    .sendInfos{
        display: flex;
        flex-direction: row;
        align-items: center;

    }
    .add {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 3px 8px;
        border-radius: 5px;
        
        color: #FFF;
        background-color: green;
    }

    .remove{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 3px 8px;
        border-radius: 5px;
        color: #FFF;
        background-color: red;
    }
    .number{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 3px 10px;
        border-radius: 5px;
        border:  1px solid #363636;
        margin: 0 5px;
        
        
        
    }
    

`

export default Item;