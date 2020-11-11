import React, { Component } from 'react';


const ProductItem = (props) => {
    
    console.log('structure of props inside ProductItem.jsx',props);
    const product = props.product,
          toggleOutOfStock = props.toggleOutOfStock,
          remove= props.remove;

    const { name, description, price, isOutOfStock, category } = product;
    return (
        <li>
            <span className={'name ' + (isOutOfStock ? 'outofstock' : '')}>
                {name}
            </span>
            <span> {category} </span>
            <div>{description}</div>
            <div className="price">Rs.{price}</div>
            <input type="button" value="Add to Cart" />
            <br />
            <input type="button" value="Remove" onClick={() => remove(product)} />
        </li>
    )
}

export default ProductItem;