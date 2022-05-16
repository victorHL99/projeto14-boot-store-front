import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';


export default function RenderProducts({idURL,img,name, price}) {

    const navigate = useNavigate();

    function navigateToProduct() {
        navigate(`/item/${idURL}`);
    }

    return (
        <ContainerProducts onClick={navigateToProduct}>
            
            <ImagesProducts src={img} alt="Imagem do Produto"/>
            <ContainerInfo>
                <div className="title">
                    <h3>{name}</h3>
                </div>
                    <h5>Valor: R${price},00</h5>
                    <a href="#" className="myButton">Comprar</a>
            </ContainerInfo>
            
        </ContainerProducts>
    )
}

const ContainerProducts = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    border-radius: 10px;
    border: 2px solid #B295CF;
    margin-top: 10px;

`

const ImagesProducts = styled.img`
    position: relative;
    left: 0;
    width: 200px;
    height: 200px;
    border-radius: 20%;
    background-color: none;
    margin-bottom: 20px;
    margin-right: 20px;
    cursor: pointer;

`
const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center ;
    width: 100%;
    height: 100%;
    
    .title {
        position: relative;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        top: -30px;
        font-family: 'Raleway', sans-serif;
        margin-top:20px;

    }
    .myButton {
        box-shadow: 0px 0px 0px 2px #9fb4f2;
        background:linear-gradient(to bottom, #7892c2 5%, #5d3782 100%);
        background-color:#7892c2;
        border-radius:10px;
        border:1px solid #4e6096;
        display:inline-block;
        cursor:pointer;
        color:#ffffff;
        font-family:Verdana;
        font-size:15px;
        padding:12px 37px;
        text-decoration:none;
        text-shadow:0px 1px 0px #283966;
        margin-top: 10px;
    }
    .myButton:hover {
        background:linear-gradient(to bottom, #5d3782 5%, #7892c2 100%);
        background-color:#5d3782;
    }
    .myButton:active {
        position:relative;
        top:1px;
    }


`
