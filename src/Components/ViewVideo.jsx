import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import VideoCard from './VideoCard';
import { getVideoAPI } from '../Services/allAPI';



function ViewVideo({UploadVideoResponse}) {
  // to hold all video details

  const [Video,setVideo]=useState([])


  const getVideo = async()=>{
    const response = await getVideoAPI()
    console.log(response); //array of data
    setVideo(response.data) 
    
  }
  console.log(Video);//array of video
  
  useEffect (()=>{
    getVideo()
  },[UploadVideoResponse ])
  
  return (
    <>
     <Container>
    <Row>
      {
        Video.length!=0?Video.map(item=>(
      
        <Col>
        <VideoCard videoDetails ={item}/>
       
        </Col>
        )):"Not found"
      }
      </Row>
    </Container>
      
    </>
  )
}

export default ViewVideo