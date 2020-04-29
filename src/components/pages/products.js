import React from 'react';
import Product from './product';
import Image from '../../assets/img/image-1.jpg';

const contents = [
  {image: Image,
    desc: "This is a wider card with supporting text below as a natural lead-in to additional content.",
    title: 'Interior Design'
  },
  {image: Image,
    desc: "This is a wider card with supporting text below as a natural lead-in to additional content.",
    title: 'Interior Design'
  },
  {image: Image,
    desc: "This is a wider card with supporting text below as a natural lead-in to additional content.",
    title: 'Interior Design'
  }
]

class Products extends React.Component {
  render () {
    return (
      <div className='container-fluid'>
        <h1 className='text-center my-4'> Designs </h1>
        <div className='row'>
         {contents.map((detail) => <Product {...detail}/>)}
        </div>
      </div>
    )
  }
}

export default Products;
