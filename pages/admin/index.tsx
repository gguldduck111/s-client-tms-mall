import { useRouter } from 'next/router'
import { useEffect } from 'react'
import axios from 'axios'
import Header from '../../components/layout/admin/header'

const home = () => {
  const router = useRouter()

  const accessToken = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null
  const headers = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }
  console.log(headers)
  const getAdminInfo = async () => {
    await axios
      .get(encodeURI('/api/admin'), headers)
      .then((res) => {
        if (process.env.NODE_ENV === 'development') {
          console.log('response.data :', res.data)
        }
      })
      .catch((err) => {
        if (process.env.NODE_ENV === 'development') {
          console.log('response.data :', err.response)
        }

        if (err.response.status === 401) {
          router.push('/admin/signin')
        }
      })
  }

  useEffect(() => {
    getAdminInfo()
  }, [])

  return (
    <div className='frontend-page header-normal'>
      <Header></Header>
      <div className='bravo_wrap'></div>
    </div>
  )
}

export default home
