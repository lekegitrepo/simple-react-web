import React from 'react';
import ImageSlide from './image-slide';
import Image1 from '../../assets/img/image-1.jpg';
import Image2 from '../../assets/img/image-2.jpg';
import Image3 from '../../assets/img/image-3.jpg';

 const imgUrls = [Image1, Image2, Image3];

class Carousel extends React.Component {
  constructor(props){
    super(props);

    this.state = { currentImageIndex: 0};

    this.nextSlide = this.nextSlide.bind(this);
    this.selectSlide = this.selectSlide.bind(this);
  }

  componentDidMount(){
    this.indexCount = setInterval(
      () => this.nextSlide(),
      5000
    );
  }

  componentWillUnmount() {
    clearInterval(this.indexCount);
  }

  selectSlide () {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide () {
    const index =  this.incrementIndex();

    this.setState({
      currentImageIndex: index
    });
  }

  incrementIndex(){
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    return shouldResetIndex ? 0 : currentImageIndex + 1;
  }

  render () {
    return (
      <div className="carousel">
        <ImageSlide imageUrl={ imgUrls[this.state.currentImageIndex] } />
      </div>
    );
  }
}

export default Carousel;
