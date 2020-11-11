import React, { useEffect } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//import ProductStats from './views/ProductStats';
import ProductEditor from './views/ProductEditor';
import ProductsList from './views/ProductsList';
import './productsIndex.css';
import productActionCreators from './actions/productsIndex';
import Cart from '../OrderCart/views/Cart';


 const Products = ({ data, toggleOutOfStock, remove, removeOutOfStock, addNew, load,addNewCart }) => {
     useEffect(load, [load]);
     console.log('inside productsIndex.js load addNew',addNew);
     return (
         //<ProductEditor addNew={addNew} categories={categories} />
        // <ProductStats products={data} />
        
        <div>
            <h3>Products</h3>
            <input type="button" value="LOAD PRODUCTS" onClick={load}/>
            <hr />
            <ProductEditor addNew={addNew} />
            <ProductsList
                products={data}
                toggleOutOfStock={toggleOutOfStock}
                remove={remove}
                removeOutOfStock={removeOutOfStock}
            />
        </div>
    );
}

function mapStateToProps(storeState){
  
   console.log('inside mapStatetoprops products index.js',storeState.addNewCart);
    return { data: storeState.products,storeState};

}


//const mapDispatchToProps = dispatch => bindActionCreators(productActionCreators, dispatch);

function mapDispatchToProps(dispatch) {
    console.log('we are here mapDispatchToProps',dispatch);
    return bindActionCreators(productActionCreators,dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Products);