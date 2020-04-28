import React from 'react';
import Product from './product';

class Products extends React.Component {
  render () {
    return (
      <div className='container-fluid'>
        <h1 className='text-center my-4'> Designs </h1>
        <div className='row'>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    )
  }
}

export default Products;
