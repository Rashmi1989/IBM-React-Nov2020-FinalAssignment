import React, { Component } from 'react';
import ProductItem from './ProductItem';
import './productsList.css';

class ProductsList extends Component {
    render() {
        const { products, toggleOutOfStock, remove, removeOutOfStock } = this.props;
        console.log('inside productsList.jsx props',this.props);
        const productItems = products.map(product => (
            <ProductItem
                key={product.id}
                product={product}
                toggleOutOfStock={toggleOutOfStock}
                remove={remove}
            />
        )
        );
        return (
            <div className='center-col'>

               <section className="list">
                <ol>
                    {productItems}
                </ol>
                
            </section>
            </div>
            
        )
    }
}

export default ProductsList;