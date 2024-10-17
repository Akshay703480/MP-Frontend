import React, { useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { addCategoryAPI, deleteCategoryAPI, getCategoryAPI, getVideoDetailsAPI, updateVideoDetailsAPI } from '../Services/allAPI';
import VideoCard from './VideoCard';



function AddCategory() {

  const [categoryName, setCategoryName] = useState("")
  const [categryDetails, setCategryDetails] = useState([])




  const getCategory = async () => {
    const response = await getCategoryAPI()
    console.log(response); //array of data
    setCategryDetails(response.data)

  }
  console.log(categryDetails);//array of video

  const handleDelete = async (id) => {
    const result = await deleteCategoryAPI(id)
    window.location.reload();
  }


  useEffect(() => {
    getCategory()
  }, [])

  //drag and drop
  const dragOver = (e) => {
    e.preventDefault()
    console.log("Video Over");
    console.log(e);
  }

  const videoDropped = async (e, categoryId) => {
    const videoId = e.dataTransfer.getData("videoid");
    console.log("video dropped successfully ..." + categoryId, "video id" + videoId);
    console.log(e);
    //fetch the video details
    const { data } = await getVideoDetailsAPI(videoId)
    console.log(data);
    // addthese details to the category=>allVideos[]
    const selectedCategory = categryDetails.find((item) => item.id == categoryId)
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);
    const updateVideoDetails = await updateVideoDetailsAPI(categoryId, selectedCategory)
    console.log(updateVideoDetails);
    getCategory()

  }


  const handleCategory = async () => {
    if (categoryName) {
      const body = {
        categoryName,
        allVideos: []
      }
      try {
        const result = await addCategoryAPI(body)
        console.log(result);
        alert("Category added successfully")
        handleClose()
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Button className=' ' style={{ paddingRight: `95px`, paddingLeft: `95px` }} variant="warning" onClick={handleShow}>
        Add Category
      </Button>




      <div className='row'>
        {
          categryDetails.length > 0 ? categryDetails.map((item) => (
            <div droppable={true} onDragOver={e => dragOver(e)} onDrop={(e) => videoDropped(e, item.id)} className='px-3 py-3 border rounded my-4'>
              <h6 className='py-1'>{item.categoryName}  <Button style={{ float: `right` }} variant="danger"><MdDelete onClick={() => handleDelete(item.id)} /></Button> </h6>
              <div className='row'>

                {
                  item.allVideos.length > 0 ? item.allVideos.map(video => (
                    <div className='col'>
                      <VideoCard videoDetails={video} />
                    </div>
                  )) : ""
                }
              </div>
            </div>
            )) : null}
      </div>
         
              

      





      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title> Add Category</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Container className='border rounded border-radius p-3 mt-3' >
            <input onChange={(e) => setCategoryName(e.target.value)} style={{ width: `250px` }} className='my-2 rounded px-3' placeholder='Video Caption' type="text" />

          </Container>
        </Modal.Body>

        <div style={{ paddingLeft: `300px` }} className='d-flex pb-3 mx-2  '>
          <Button className='mx-2 ' onClick={handleClose} variant="secondary">Cancel</Button>{' '}
          <Button onClick={handleCategory} variant="warning">Add</Button>{' '}
        </div>

      </Modal>


    </>
  )
}

export default AddCategory