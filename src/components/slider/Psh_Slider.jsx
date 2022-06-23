import React from 'react'

import { Carousel } from 'react-bootstrap';

import imgList from './ImageList';
import './Psh_Slider.css';


const Psh_Slider = () => {
  return (
      <Carousel
        pause={false}
        fade={true}
      >
        {imgList.map((item, index) => {
          return (
            <Carousel.Item>
            <img
              className="d-block w-100"
              src={item.src}
              alt={item.title}
              style={{
                width:"100%",
                height:"1000px",
                backgroundSize:"cover"
              }}
            />
            <Carousel.Caption>
              <h3 className='slide-title'>{item.title}</h3>
              <p className='slide-content'>{item.content}</p>
            </Carousel.Caption>
          </Carousel.Item>
          );
        })}
      </Carousel>
  );
}

export default Psh_Slider