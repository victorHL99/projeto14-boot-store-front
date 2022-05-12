import React from 'react';

export default function RenderProducts({img,name, price}) {
    return (
        <div>
            <img src={img} alt=""/>
            <h1>{name}</h1>
            <h1>{price}</h1>
            
        </div>
    )
}