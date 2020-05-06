import React from 'react';
import { Link } from 'react-router-dom';

const ImageSlide = ({ imageUrl }) => {
  const {image, desc, title} = imageUrl
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: '#000'
  };

  return (
    <div className="image-slide" style={styles}>
      <div className="slide-desc trans-white-bg"> 
        <div className="info">
          <div className="title"> { title } </div>
          <div className="desc"> { desc } </div>
        </div>
        <Link className="slide-detail" to="/" > click here for detail </Link>
      </div>
    </div>
  );
}

export default ImageSlide;
