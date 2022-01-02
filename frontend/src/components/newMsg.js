import React, { useState } from 'react'
import { Container, Row, Button, Form } from 'react-bootstrap';

const NewMessage = (props) => {
    const [title, setTitle] = useState('')
    const [txt, setTxt] = useState('')
    const [first, setFirst] = useState('')
  
    const submit = async (event) => {
      event.preventDefault()
      props.addMsg({ title: title, text: txt, isFirst: first })
      setTitle('')
      setTxt('')
      setFirst('')
    }
    
    return (
      <Container>
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
            <Row>
            New thread?(true/false) 
            <Form.Control
              value={first}
              onChange={({ target }) => setFirst(target.value)}
            />
          </Row>
          <Button type='submit'>Send message</Button>
        </Form>
      </Container>
    )
  }
  
  export default NewMessage