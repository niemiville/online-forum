import React, { useState } from 'react'
import { Container, Row, Button, Form, Modal } from 'react-bootstrap';

const NewThread = (props) => {
    const [title, setTitle] = useState('')
    const [txt, setTxt] = useState('')
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const submit = async (event) => {
      event.preventDefault()
      props.addThread({ title: title, text: txt })
      setTitle('')
      setTxt('')
      handleClose()
    }
    
    return (
      <>
        <Container className="cus-pad clearfix">
        <Button md="auto" className="float-end" variant="primary" onClick={handleShow}>
          {props.openButtonText}
        </Button> </Container>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New thread</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form onSubmit={submit}>
          <Row>
            Title 
            <Form.Control
              value={title}
              onChange={({ target }) => setTitle(target.value)}
            />
          </Row>
          <Row>
            Message 
            <Form.Control
              value={txt}
              onChange={({ target }) => setTxt(target.value)}
            />
            </Row>
           
          
        </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type='submit' variant="primary" onClick={submit}>
              Create thread
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default NewThread
