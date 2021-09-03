import defalutAxios from 'axios'
import { useState } from 'react'
import { headers } from '../plugin/axios'

const useAxios = (
  opts: { url: string; method: 'GET'; headers: {}; timeout: 1000 },
  axiosInstance = defalutAxios,
) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  })
  axiosInstance(opts)
    .then((data) => {
      setState({
        ...state,
        loading: false,
        data,
      })
    })
    .catch((error) => {
      if (process.env.NODE_ENV === 'development') {
        console.log(error.response)
      }
      setState({
        ...state,
        loading: false,
        error,
      })
    })

  return state
}

export default useAxios
