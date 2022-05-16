import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

export default function RenderProducts({idURL,img,name, price}) {

    const navigate = useNavigate();

    function navigateToProduct() {
        navigate(`/item/${idURL}`);
    }

    return (
        <ContainerProducts onClick={navigateToProduct}>
            
            <ImagesProducts src={img} alt=""/>
            <ContainerInfo>
                <h3>{name}</h3>
                <h5>Valor: R${price},00</h5>
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
    border: 1px solid #B0C4DE;
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


`
const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    
    h1 {
        font-family: 'Saira Stencil One', cursive;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;

    }

`