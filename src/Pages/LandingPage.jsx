import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <Container>
      <Row>
        <Col   > <h3 className='text-center  '>Welcome to Media Player </h3>
        <p className='pb-5' style={{textAlign: `justify`}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro magni recusandae obcaecati. Repellat fugiat commodi voluptas dolore, iste veniam dolores, sapiente facere quaerat modi assumenda laboriosam provident, excepturi nemo aliquid!
        Enim quisquam consectetur veniam fugiat repellat autem nemo minima dolorum ullam praesentium quidem consequuntur inventore hic quibusdam adipisci vitae tempore id ipsum omnis, sequi at perferendis ipsa? Quasi, expedita sint!
        Illo, nam fuga excepturi dolorum tenetur numquam natus mollitia animi maxime aut dolor placeat incidunt itaque soluta omnis aliquam sunt, ab dolores alias, quia harum at. Veritatis cupiditate ex consequatur.</p>
        <Link to={`/Home`}><Button className='' variant="warning">Get started</Button>{' '}</Link>
         </Col>
        <Col ><img style={{width:`400px`,paddingLeft:`150px`, paddingTop:`20px`}}className='' src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="" /></Col>
        
      </Row>
      <br />
      </Container>
      <section>
      <Container  >
    
    <Row>
      <h4 style={{textAlign:`center`, padding:`20px`}}>Features</h4>

      <Col>
      <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX697XrhDr0S6Z9adDpqGiXU3hThQkgNbss6hU4nhSWEQqO5Bf7mR9dR7eWcMG38xS06I&usqp=CAU" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      
    </Card.Body>
  </Card>
      </Col>
      

      <Col>
      <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6T0KY6zB4Y0Tca3qDZInKhPeqNQLL-ty6vnXeWVGEQjj7A4GwXwp7k900OyVHu67XaA4&usqp=CAU" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
     
    </Card.Body>
  </Card>
      </Col>

      <Col>
      <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4KLbAb0CdsfrTG2PYMGuqFuxLFMZlAsjgOfqTwWWs-tcE79jhp230SG3rbCpZYgUbgJM&usqp=CAU" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      
    </Card.Body>
  </Card>
      
      </Col>
    </Row>
    </Container>
      </section>

      <section style={{paddingTop:`60px`}}>
      <Container className='border shadow'  >
        <Row>
          <Col style={{textAlign: `justify`}}>
          <h4 style={{padding:`20px`}}>Simple fast and PowerFull</h4>
          <p><b style={{fontSize:`20px`}}>Play Everything:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla corporis vel non doloribus alias aut, odit, magni debitis totam eum officiis quas consectetur quod ducimus voluptate similique, omnis eveniet iste?</p>
          
          <p> <b style={{fontSize:`20px`}}>Play Everything:</b>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla corporis vel non doloribus alias aut, odit, magni debitis totam eum officiis quas consectetur quod ducimus voluptate similique, omnis eveniet iste?</p>
          <p><b style={{fontSize:`20px`}}>Play Everything:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla corporis vel non doloribus alias aut, odit, magni debitis totam eum officiis quas consectetur quod ducimus voluptate similique, omnis eveniet iste?</p>
          
          
          </Col>
          <Col>
          <iframe className='pt-5' width="560" height="315" src="https://www.youtube.com/embed/OgRoRBLZbUQ?si=UbHqzUpSVzvh-vf7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          
          </Col>
        </Row>
      </Container>

      </section>




     




      


    </div>
  )
}

export default LandingPage