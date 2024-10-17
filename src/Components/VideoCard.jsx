import React from 'react'
import Card from 'react-bootstrap/Card';
import { MdDelete } from "react-icons/md";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { TbPhotoVideo } from "react-icons/tb";
import { addWatchAPI, deleteAVideoAPI } from '../Services/allAPI';


function VideoCard( {videoDetails}) {
  console.log(videoDetails);

  const handleDelete =async(id)=>{
    const result =await deleteAVideoAPI(id)
    window.location.reload();
  }
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  //add watch history API
  const handleShow = async() => {

    setShow(true);

    const{caption,url} = videoDetails

    let today = new Date()
    console.log(today);//current date

    //convert date and time 
    let timestamp = new Intl.DateTimeFormat('en-US',{year:'numeric',month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)//2022-10-10 10:15:30
    console.log(timestamp);

    let details = {
      caption,
      url,
      timestamp
    }
    //api call
    const response = await addWatchAPI(details)
    console.log(response);
    
    
  
      
      
    }
    //drag and drop
    const dragStarted = (e, videoId) => {
      console.log("Video drag started" + videoId);
      console.log(e);
      e.dataTransfer.setData("videoid", videoId);

  }

  return (
    <>
     <Card draggable={true} onDragStart={(e)=>dragStarted(e,videoDetails.id)} className='p-' >
        <img onClick={handleShow} width={`225`} height={`200`} src={videoDetails.img} alt="" />
      <Card.Body>
        <Card.Title>{videoDetails.caption} <Button  style={{float:`right`}} variant="danger"><MdDelete onClick={()=>handleDelete(videoDetails.id)} /></Button> </Card.Title>
        
       
      </Card.Body>
        </Card>



        
      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title><TbPhotoVideo className='fs-2 ' /> Watch Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe className='pt-5' width="460" height="315" src={videoDetails.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          

         
        </Modal.Body>

        <div style={{paddingLeft:`300px`}} className='d-flex pb-3 mx-2  '>
        <Button className='mx-2' onClick={handleClose} variant="secondary">Cancel</Button>{' '}
        <Button onClick={handleClose} variant="warning">Upload</Button>{' '}
        </div>
        
      </Modal>






    </>
  )
}

export default VideoCard