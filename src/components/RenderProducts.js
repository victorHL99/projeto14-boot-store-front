import styled from 'styled-components';
export default function RenderProducts({img,name, price}) {
    return (
        <ContainerProducts>
            <ImagesProducts src={img} alt=""/>
            <h1>{name}</h1>
            <h1>{price}</h1>
            
        </ContainerProducts>
    )
}

const ContainerProducts = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

`

const ImagesProducts = styled.img`
    position: relative;
    left: 0;
    width: 200px;
    height: 200px;
    border-radius: 20%;
    background-color: none;


`