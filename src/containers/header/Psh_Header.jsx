import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {BiHome, BiMusic, BiPhone, BiTag} from "react-icons/bi";
import {ParticleBg} from '../../components';
import './Psh_Header.css'

const headerItems =[
  {
    title:'Home',
    url:'#home',
    cName:'header__item-links',
    icons: BiHome,
  },
  {
    title:'Services',
    url:'#services',
    cName:'header__item-links',
    icons: BiMusic,
  },
  {
    title:'Projects',
    url:'#projects',
    cName:'header__item-links',
    icons: BiPhone,
  },
  {
    title:'Contact us',
    url:'#contact',
    cName:'header__item-links',
    icons: BiTag,
  },
]


const Psh_Header = () => {
  return (
    <div className='psh__Header_section' id="home">
        <ParticleBg/>
        
        <Container>

          <div className='psh__Header-title'>
            <h1>React-Bootstrap</h1>
            <p>Practice ReactBootstrap</p>
          </div>

          <Row>
            {headerItems.map((item, index) => {
              return (
                <Col className={item.cName}>
                  <a href={item.url} style={{ textDecoration: 'none', color: 'unset' }} >
                    <div>
                      <item.icons />
                      <h3>{item.title}</h3>
                    </div>
                  </a>
                </Col>
              )
            })}
          </Row>
        </Container>
    </div>
  )
}

export default Psh_Header