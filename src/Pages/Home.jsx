import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AddVideo from '../Components/AddVideo'
import { Link } from 'react-router-dom'
import ViewVideo from '../Components/ViewVideo'
import AddCategory from '../Components/AddCategory'
import { MdOutlineHistory } from "react-icons/md";





function Home() {

// statelifting
  const [UploadVideoResponse,setUploadVideoResponse] = useState({})

  
  return (
    <>
    <Container>
      <Row>
        <Col>
        <div className='d-flex'>
         <h5 className='pt-1'>Upload Video</h5> 
         < AddVideo  setUploadVideoResponse={setUploadVideoResponse} />
        </div>
        </Col>
        <Col>
        <Link to={`/WatchHistory`} ><h5 style={{float:`right`}}>Watch history  <MdOutlineHistory /></h5></Link>
        </Col>
      </Row>
    </Container>
    <Row>
        <Col xs={12} md={6}>
        <h5 className='m-3'>All videos</h5>
        <ViewVideo   UploadVideoResponse={UploadVideoResponse} />
        </Col>
        <Col  style={{paddingRight:`40px`}} xs={2} md={6}>
        <h5  >Add Category</h5>
        <AddCategory/>
        </Col>
      </Row>
  
    
    </>
  )
}

export default Home