import React from 'react';
import { Carousel } from 'react-bootstrap';
import Products from '../Moduls/Products'; 

const ExampleCarouselImage = ({ text }) => (
  <div style={{  height: '400px' , width:'500px' , display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', fontSize: '24px' }}>
    {text}
  </div>
);

const Home = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <ExampleCarouselImage text="First slide" />
          <Carousel.Caption>
            <img src="/main.jpg" alt="First slide" style={{ width: '100%', height: '500px' }} />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Products />
    </>
  );
};

export default Home;
