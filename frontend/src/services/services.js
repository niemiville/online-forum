import axios from 'axios'
const msgUrl = 'http://localhost:3030/api/messages'
const threadUrl = 'http://localhost:3030/api/threads'

const getAllMessages = async () => {
  const request = axios.get(msgUrl)
  const response = await request
  return response.data
}

const getAllMessagesInThread = async (threadId) => {
  console.log("asd")
  const request = axios.get(`${msgUrl}/${threadId}`)
  const response = await request
  return response.data
}

const addMsg = async (newMsg) => {
    const response = await axios.post(msgUrl, newMsg)
    return response.data
}

const getAllThreads = async () => {
  const request = axios.get(threadUrl)
  const response = await request
  return response.data
}

const addThread = async (newThread) => {
  const response = await axios.post(threadUrl, newThread)
  return response.data
}

export { getAllMessages, getAllMessagesInThread, addMsg, getAllThreads, addThread };
