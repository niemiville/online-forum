import React, { useState } from 'react'

const NewMessage = (props) => {
    const [txt, setTxt] = useState('')
  
    /* if (!props.show) {
      return null
    } */
  
    const submit = async (event) => {
      event.preventDefault()
      props.addMsg({ text: txt })
      setTxt('')
    }
  
    return (
      <div>
        <form onSubmit={submit}>
          <div>
            Write a message 
            <input
              value={txt}
              onChange={({ target }) => setTxt(target.value)}
            />
          </div>
          <button type='submit'>Send message</button>
        </form>
      </div>
    )
  }
  
  export default NewMessage