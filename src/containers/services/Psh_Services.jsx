import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './Psh_Services.css'
import servicesList from './servicesList'

const Psh_Services = () => {
  return (
    <div className='psh__Services_section' id="services">
        <Container>
          <div className='service__process'>
              <h1>Service Process</h1>
          </div>
          <Row>
            {servicesList.map((item, index) => {
              return(
                  <Col className="single-cat" lg={4} sm={6}>
                    <div className='cat-icon'>
                        <item.icons/>
                    </div>
                    <div className='cat-cap'>
                        <h5>{item.title}</h5>
                        <p>{item.content}</p>
                    </div>
                  </Col>
              )
            })}
          </Row>
        </Container>
    </div>
  )
}

export default Psh_Services