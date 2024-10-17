import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import { deleteWatchAPI, getWatchAPI } from '../Services/allAPI';

function WatchHistory() {
  // to hold all video details
  const [history, sethistory] = useState()

  const gethistory = async () => {
    const response = await getWatchAPI()
    console.log(response); //array of data
    sethistory(response.data)

  }
  console.log(history);//array of video

  useEffect(() => {
    gethistory()
  }, [])

  const handleDelete = async (id) => {
    const result = await deleteWatchAPI(id)
    window.location.reload();
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h5 className='pt-1'>Watch History</h5>
          </Col>

          <Col>
            <Link to={`/`} ><h5 style={{ float: `right` }}>   Back Home</h5></Link>
          </Col>
        </Row>
      </Container>

      <Container className='pt-5'>



        <Table striped="columns">
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Caption</th>
              <th>Url</th>
              <th>Timestamp</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              history ? history.map(item => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.caption}</td>
                  <td>{item.url}</td>
                  <td>{item.timestamp}</td>
                  <td><button className='btn btn-danger' onClick={() => handleDelete(item.id)}>Delete</button></td>
                </tr>

              )) : "not found"
            }

          </tbody>
        </Table>
      </Container>


    </>
  )
}

export default WatchHistory