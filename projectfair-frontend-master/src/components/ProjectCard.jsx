import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Col, Modal, Row } from 'react-bootstrap';
import { BASE_URL } from '../services/baseurl';


function ProjectCard({project}) {
  const [show,setShow] = useState(false);

  const handleClose = () =>setShow(false)
  const handleShow = () =>setShow(true)
  return (
    <>
{project && <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={project?`${BASE_URL}/uploads/${project?.projectImage}`:projectpic}
         onClick={handleShow} />
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
        </Card.Body>
      </Card>}

      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{project.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <img height={'210px'} width={'300px'} src={project?`${BASE_URL}/uploads/${project?.projectImage}`:projectpic} alt="" />
            </Col>
            <Col md={6}>
              <h2>{project.title}</h2>
              <p>Project Overview: {project.overview}</p>
              <p>Languages Used:<span className='fw-bolder'>{project.languages}</span></p>
            </Col>
          </Row>

          <div>
            <a href={project.github} className='me-3'><i class="fa-brands fa-github fa-2x text-dark"></i></a>
            <a href={project.website} className='me-3'><i class="fa-solid fa-link fa-2x text-dark"></i></a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ProjectCard