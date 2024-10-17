import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


function Footer() {
  return (
    <div  className='bg-Dark'>
      <hr />
      
      < >
        <Row className='text-center m-3'>
          <p>All rights under media app @mediaapp.com2024</p>
        </Row>
        <Row className='d-flex justify-contents-between text-center'>
          <Col><p>Media Player</p></Col>
          <Col><p>About Us</p></Col> 
          <Col><p>Address </p>
          
          </Col>
        </Row>
      </>
    </div>
  )
}

export default Footer