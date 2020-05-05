import React from 'react';
import Product from './product';
import contents from '../../assets/info/data';

class Products extends React.Component {
  render () {
    return (
      <div className='container-fluid page-container'>
        <h1 className='text-center my-4 title'> Designs </h1>
        <div className='row'>
         {contents.map((detail) => <Product {...detail}/>)}
        </div>
      </div>
    )
  }
}

export default Products;
