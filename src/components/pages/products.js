import React from 'react';
import Product from './product';

class Products extends React.Component {
  render () {
    return (
      <div className='container-fluid'>
        <h1> Products </h1>
        <div className='row'> <Product /> </div>
      </div>
    )
  }
}

export default Products;
