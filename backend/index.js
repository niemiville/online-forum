
const connection = require('./models/db');
const Message = require('./models/message')
const Thread = require('./models/thread')
const express = require('express')
const app = express()
const cors = require('cors')

require('dotenv').config(); 
connection.connectDB();

app.use(express.static('build'))
app.use(cors())
app.use(express.json())

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

app.use(requestLogger)

app.get('/api/threads', (request, response) => {
  Thread.find({}).then(threads => {
    response.json(threads)
  })
})

app.get('/api/threads/:id', (request, response) => {
  const threadId = request.params.id
  Thread.find({_id: threadId}).then(messages => {
    response.json(messages)
  })
})

app.post('/api/threads', (request, response) => {
  const body = request.body

  if (body.title === undefined || body.text === undefined) {
    return response.status(400).json({ error: 'content missing' })
  } 

  const thread = new Thread({
    title: body.title,
    text: body.text,
    date: new Date()
  })

  thread.save().then(savedThread => {
    response.json(savedThread)
  })
})

app.get('/api/messages', (request, response) => {
  Message.find({}).then(messages => {
    response.json(messages)
  })
})

app.get('/api/messages/:thread', (request, response) => {
  const threadId = request.params.thread
  Message.find({thread: threadId}).then(messages => {
    response.json(messages)
  })
})

app.post('/api/messages', (request, response) => {
  const body = request.body

  if (body.text === undefined || body.thread === undefined) {
    return response.status(400).json({ error: 'content missing' })
  } 

  const message = new Message({
    thread: body.thread,
    text: body.text,
    date: new Date()
  })

  message.save().then(savedMessage => {
    response.json(savedMessage)
  })
})

/* app.get('/api/notes/:id', (request, response) => {
  Note.findById(request.params.id).then(note => {
    response.json(note)
  })
})

app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)

  response.status(204).end()
}) */

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })