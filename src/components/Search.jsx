import styled from 'styled-components';

import {BsSearch} from 'react-icons/bs';

export default function Search() {
    return(
        <SearchBar>
            <form >
                <input className="searchInput" type="text" placeholder="Pesquisar"/>
                <button className="searchButton" ><BsSearch cursor={'pointer'} color={'#B295CF'} size={25}/></button>
            </form>
        </SearchBar>
    )

}

const SearchBar = styled.div`
    position: absolute;
    top:60px;
    z-index: 1;
    width: 100vw;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing:border-box;


    .searchInput{
        position: relative;
        background-color: #B295CF;
        width:300px;
        height: 35px;
    }
    .searchButton{
        position: relative;
        width: auto;
        top:7px;
        height: auto;
        border: none;
        background-color: none;
    }

`