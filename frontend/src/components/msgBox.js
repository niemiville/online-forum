
const MsgBox = ({msg}) => (
  <div>
    <b>ID: {msg._id}</b> 
    <p></p>
    <b>Date: {msg.date}</b> 
    <p>{msg.text}</p>
    <p>---</p>
  </div>  
)

export default MsgBox
