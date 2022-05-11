import styled from 'styled-components';

import {BsTruck} from 'react-icons/bs';
import {BsStopwatch} from 'react-icons/bs';
import {BsCash} from 'react-icons/bs';
export default function Footer() {
    return (
        <FooterPage>
            <div className="containerFrete">
                <BsTruck size={44} color="#fff"/>
                <h1>Frete Grátis</h1>
            </div>
            <div className="containerTempo">
                <BsStopwatch size={44} color="#fff"/>
                <h1>Entrega Expressa</h1>
            </div>
            <div className="containerPagamento">
                <BsCash size={44} color="#fff"/>
                <h1>Pagamento Seguro</h1>
            </div>
        </FooterPage>
    )
}

const FooterPage = styled.div`
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    padding:15px;
    align-items: center;
    width: 100%;
    height: 80px;
    left: 0;
    bottom: 0;
    background-color: #5C3782;

    h1{
        margin-top:5px;
        font-size: 13px;
        font-family: 'Saira Stencil One', cursive;
        color: #FFFFFF;
    }

    .containerFrete {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .containerTempo {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .containerPagamento {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

`