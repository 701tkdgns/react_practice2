import React from 'react'
import {Container} from 'react-bootstrap'
import './Psh_Contact.css'
import contactList from './config/contactList'

const Psh_Contact = () => {
  return (
    <div id="contact">
      <Container>
        <div className='contact-heading'>
          <h1>Contact</h1>
          <p>찾아오시는 길</p>
        </div>


        <div className="map__section">
          <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Kyungin%20Women's%20University&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>

        <div className='contact__info-container'>
          {contactList.map((item, index) => {
              return (
                <div className='contact__info-list'>
                  <item.icons className='contact__info-list-icon'/>
                  <h4>{item.title}</h4>
                  <p>{item.content}</p>
                </div>
              );
          })}

        </div>

      </Container>
    </div>
  )
}

export default Psh_Contact