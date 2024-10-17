import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import { MdOutlineSlowMotionVideo } from "react-icons/md";



function Header() {
  return (
    <>
    <Navbar className="text-white ">
        <Container >
          <Navbar.Brand href="/">
           <h1> <MdOutlineSlowMotionVideo className='pb-2' />Video Player</h1> 
          </Navbar.Brand>
        </Container>
      </Navbar ><hr style={{color:`lightcoral`}} />
      
   </>
      
    
  )
}

export default Header