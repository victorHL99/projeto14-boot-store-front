import {useEffect, useContext, useState} from 'react';

import styled from 'styled-components';

import Header from "./Header";
import Search from "./Search";
import Footer from "./Footer";
import TokenContext from "./context/Token";
import api from '../components/api/api.js';

import RenderProducts from './RenderProducts';


function Home(){
    const context = useContext(TokenContext);
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const config ={
            headers: {
                Authorization: `Bearer ${context.token}`
            }
        }

        api.get('/', config)
            .then((response)=>{
                const ObjectProducts = response.data;
                setProducts(ObjectProducts);
            })
            .catch((error)=>{
                console.log(error);
            });

    },[context.token]);

    
    return(
        <>

        <Header />
        <Search />
        <Main>
            <div className="containerProducts">
                {products.map((product, index)=> <RenderProducts key={index} idURL={product._id}img={product.imagesURL} name={product.name} price={product.price}/>)}
            </div>
        </Main>
        <Footer/>
        </>
    )
}

export default Home;


const Main = styled.main`
    position: relative;
    z-index: 1;
    top:140px;
    z-index: 0;
    width: 100vw;
    height: auto;
    bottom: 80px;

`