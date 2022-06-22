import React from 'react';
import { Container } from 'react-bootstrap';
import { Psh_Swiper } from '../../components';
import './Psh_Projects.css'


const Psh_Projects = () => {
  return (
    <div className='psh__projects-section' id="projects">
      <Container>
        <Psh_Swiper/>
      </Container>
    </div>
  )
}

export default Psh_Projects