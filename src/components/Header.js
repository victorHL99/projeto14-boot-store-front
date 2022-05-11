import styled from 'styled-components';

import { HiMenu } from 'react-icons/hi';
import { BsCart2 } from 'react-icons/bs';

function Header (){

    return(

        <HeadPage>
            
            <HiMenu size={'30px'}/>

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
       
    }
    .logo .store{
         font-family: 'Parisienne';
    }


`


export default Header;