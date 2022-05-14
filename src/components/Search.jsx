import styled from 'styled-components';

import {BsSearch} from 'react-icons/bs';

export default function Search() {
    return(
        <SearchBar>
            <form >
                <input className="searchInput" type="text" placeholder="Pesquisar"/>
                <button className="searchButton" ><BsSearch size={18}/></button>
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
    background-color: red;
    box-sizing:border-box;


    .searchInput{
        position: relative;
        background-color: #5d37827b;
        margin-top: ;
        width:250px;
        height: 30px;
    }
    .searchButton{
        position: relative;
        background-color: green;
        width: 30px;
        height: 30px;
        border: none;
    }

`