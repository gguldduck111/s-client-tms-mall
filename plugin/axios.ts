import axios from 'axios'

const accessToken = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null
export const headers = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
}
const fileConfigs = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'multipart/form-data',
  },
}

export const axiosGet = async (url: string) => {
  let sendData = {}
  await axios
    .get(encodeURI(url), headers)
    .then((res) => {
      if (process.env.NODE_ENV === 'development') {
        console.log('response.data :', res.data)
      }
      sendData = res.data
    })
    .catch((err) => {
      if (process.env.NODE_ENV === 'development') {
        console.log('response.data :', err.response.data)
      }
      sendData = err.response.data
    })
    .finally(() => {
      return sendData
    })
}

export const axiosPost = async (url: string, body) => {
  const response = await axios.post(encodeURI(url), body, headers)
  if (process.env.NODE_ENV === 'development') {
    console.log('response.data :', response.data)
  }
  return response.data
}

export const axiosPostFile = async (url: string, body) => {
  const response = await axios.post(encodeURI(url), body, fileConfigs)
  return response.data
}

export const axiosPut = async (url: string, body) => {
  const response = await axios.put(encodeURI(url), body, headers)
  return response.data
}

export const axiosPatch = async (url: string, body) => {
  const response = await axios.patch(encodeURI(url), body, headers)
  return response.data
}

export const axiosDelete = async (url: string) => {
  const response = await axios.delete(encodeURI(url), headers)
  return response.data
}
