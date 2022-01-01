import axios from 'axios'
const msgUrl = 'http://localhost:3030/api/messages'

const getAll = async () => {
  const request = axios.get(msgUrl)
  const response = await request
  return response.data
}

const addMsg = async (newMsg) => {
    const response = await axios.post(msgUrl, newMsg)
    return response.data
}

export { getAll, addMsg }
