import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom"
import formatDate from '../utils/helpers'

const Thread = ({thread}) => {
  if (thread === undefined) {
    return null
  }
  const threadLink = `/threads/${thread._id}`
  
  return(   
    <Container>
      <Row className="clearfix cus-title-bar rounded">  
        <Col md="auto" className="float-start"><Link to={threadLink}>{thread.title}</Link></Col>
        <Col md="auto" className="float-start">{formatDate(thread.date)}</Col> 
      </Row>
      <Row className="cus-msg-field rounded">
        {thread.text}
      </Row>
    </Container> 
  )
}
export default Thread
