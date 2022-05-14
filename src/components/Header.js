import {useState} from 'react';
import styled from 'styled-components';

import { HiMenu } from 'react-icons/hi';
import { BsCart2 } from 'react-icons/bs';
import {BsFillXCircleFill} from 'react-icons/bs';

function Header (){

    const [menu, setMenu] = useState(false);

    function toggleMenu(){
        if(menu === false){
            return(
                <HiMenu onClick={()=>setMenu(true)} size={'30px'}/>
            )
        } else {
            return(
                <MenuBar>
                    <div className="exit">
                        <BsFillXCircleFill onClick={()=>setMenu(false)} size={'30px'}/>
                    </div>
                </MenuBar>
            )

        }
    }
    

    return(

        <HeadPage>
            
            {toggleMenu()}

            <div className={'logo'}>
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

`


export default Header;