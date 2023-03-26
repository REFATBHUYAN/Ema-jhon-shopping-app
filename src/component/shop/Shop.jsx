import React, { useEffect, useState } from 'react';
import Product from '../card/Product';

const Shop = () => {
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    const handleAddToCart = (product) =>{
       const newCart = [...cart, product];
       setCart(newCart);
    }

    return (
        <div className='flex'>
            <div className='w-3/4 grid grid-cols-3 gap-3 m-4'>
                {
                    product.slice(0, 20).map(item => <Product 
                        key={item.id} 
                        item ={item}
                        handleAddToCart = {handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className='w-1/4'>
                <h1>cart: {cart.length}</h1>
            </div>
        </div>
    );
};

export default Shop;