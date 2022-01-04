import {
  BrowserRouter as Router,
  Switch, Route, Link, useParams
} from "react-router-dom"

const Thread = ({msg}) => {
  const threadLink = `/threads/${msg._id}`

  return(
    <div>
      <Link to={threadLink}>ID: {msg._id}</Link> 
      <br></br>
      <b>Date: {msg.date}</b> 
      <br></br>
      <b>Title: {msg.title}</b>
      <br></br>
      <p>{msg.text}</p>
      <p>---</p>
    </div>  
  )
}
  export default Thread