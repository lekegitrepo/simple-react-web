import React from 'react';

const Product = ({image, desc, title}) => {
 return (
    <div className="card mb-3 col-md-4">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body trans-white-bg">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
        <p className="card-text">
        </p>
      </div>
    </div>
  );
}

export default Product;
