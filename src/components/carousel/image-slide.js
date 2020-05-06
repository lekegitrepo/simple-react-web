import React from 'react';

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
      
    </div>
  );
}

export default ImageSlide;
