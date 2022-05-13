import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";
import { MdStarHalf } from "react-icons/md";

import Loading from "./Loading";
import Header from "./Header";
import Footer from "./Footer";


function Item(){

    const {idProduto} = useParams();
    const [itemInfos, setInfos] = useState({imagesURL:'https://m.media-amazon.com/images/I/51jWQNDFfIL._AC_SL1000_.jpg', name:'Caneca Geek Nerd No Coffee No Forcee - Sem Café Sem Força', category:'dia a dia', price:'29,00', description:'Canequinha top para você lembrar de tomar aquele cafezinho maroto antes de um longo dia de codigos', qtsAvailables:'15',technicalsInfos:{brand:'aloha', material:'ceramica', warranty:'7 dias'}});



    useEffect(()=>{
        

    }, []);

    return itemInfos.name === ''
    ? <Loading/>
    :<>
        <Header/>

        <Main>
            <div className="primaryInfos">
                <img src={`${itemInfos.imagesURL}`}/>

                <div>
                    <p className="name">{itemInfos.name}</p>
                    <div className="infos">
                        <p className="price">R$ {itemInfos.price}</p>
                        <p className="available">disponiveis: {itemInfos.qtsAvailables}</p>
                        <p className="userRating">4,3<MdStarHalf color="yellow"/></p>
                        
                    </div>
                </div>

                <div className="buttons">
                    
                    <button>comprar</button>
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
    padding: 75px 15px 75px 15px;

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
        

    }

    .buttons{
        margin-top: 10px;
        width: 100%;
        background-color: #B0E0E6;
        display: flex;
        justify-content: center;
    }


`

export default Item;