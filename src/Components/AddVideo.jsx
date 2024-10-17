import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FaCloudUploadAlt } from "react-icons/fa";
import { TbPhotoVideo } from "react-icons/tb";
import { Container } from 'react-bootstrap';
import { addvideoAPI } from '../Services/allAPI';
import { commonApI } from '../Services/commonAPI';
import Swal from 'sweetalert2'




function AddVideo({setUploadVideoResponse}) {
  const [videoDetails,setVideoDetails]=useState({
    caption:"",
    img:``,
    url:``

  })
  console.log(videoDetails);

  const getempedcode =(e)=>{
    // console.log(e.target.value);
    // destructuring
    const {value} = e.target
    console.log( value);
     let ycode =value.slice(-31)
     let ylink =`https://www.youtube.com/embed/${ycode}`
     setVideoDetails({...videoDetails,url:ylink})
    
    
  }
  const handleadd= async()=>{

    const {caption,url,img}=videoDetails
    if(!caption||!img||!url){
      alert(`Please fill the details`)
    }
    else{
      // Add video API
      const response = await addvideoAPI(videoDetails)
       console.log(response);
       if(response.status >= 200 || response.status<=300){
        Swal.fire({
          title: 'success!',
          text: 'Video added successfully',
          icon: 'success',
          confirmButtonText: 'Back'
        })
        setUploadVideoResponse(response.data)
       setVideoDetails({
        caption :"",
        url:"",
        img:""
       })
       handleClose()
       
      
    }else{
      Swal.fire({
        title: 'Error!',
        text: response.message,
        icon: 'error',
        confirmButtonText: 'Back'
      })
      setUpl
       setVideoDetails({
        caption :"",
        url:"",
        img:""
       })
       handleClose()
    }
  }
  }
  


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
     <Button className='mb-5' variant="none" onClick={handleShow}>
     <FaCloudUploadAlt className='fs-2 pb-4 ' />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title><TbPhotoVideo className='fs-3 ' /> Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please fill the following details
          <Container className='border rounded border-radius p-3 mt-3 ' >
            <input onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})} style={{width:`430px`}} className='my-2 rounded px-3' placeholder='Video Caption' type="text" />
            <input onChange={e=>setVideoDetails({...videoDetails,img:e.target.value})} style={{width:`430px`}} className='my-2 rounded px-3'placeholder='Video Image' type="text" />
            <input onChange={getempedcode} style={{width:`430px`}} className='my-2 rounded px-3' placeholder='Video url' type="text" />
          </Container>
        </Modal.Body>

        <div style={{paddingLeft:`300px`}} className='d-flex pb-3 mx-2  '>
        <Button className='mx-2' onClick={handleClose} variant="secondary">Cancel</Button>{' '}
        <Button  onClick={handleadd} variant="warning">Upload</Button>{' '}
        </div>
        
      </Modal>
    </>
  )
}

export default AddVideo