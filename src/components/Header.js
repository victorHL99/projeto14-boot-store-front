import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

import { HiMenu } from 'react-icons/hi';
import { BsCart2 } from 'react-icons/bs';
import {BsFillXCircleFill} from 'react-icons/bs';

function Header (){

    const [menu, setMenu] = useState(false);

    const navigate = useNavigate();

    function ShowMenu(){
        if(menu === false){
            return(
                <HiMenu onClick={()=>setMenu(true)} size={'30px'}/>
            )
        } else {
            return(
                <MenuBar>
                        <div className="Login" onClick={()=>{navigate("/login")}}>Fazer login</div>
                    <div className="containerCategories" >
                    </div>
                    <div className="exit">
                        <BsFillXCircleFill onClick={()=>setMenu(false)} size={'30px'}/>
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

            <BsCart2 size={'30px'}/>

        </HeadPage>
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
    top: 0;

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

const MenuBar = styled.div`
    position: absolute;
    top: 60px;
    left: 0;
    width: 300px;
    height: 500px;
    background: yellow;

    .exit{
        position: absolute;
        right: 0;
    }

    .containerCategories{
        position: absolute;
        background: pink;
        top: 60px;
        left: 0;
        width: 250px;
        height: 350px;
    }
    
    .Login{
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Saira Stencil One', cursive;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        background: green;
        width: 250px;
        height: 60px;
    }

`


export default Header;