import { requestMovieDetail } from '~/api'
import { useState } from 'react'

const Detail = () => {
  const [detail, setDetail] = useState('')

  const getData = async () => {
    // const res = await requestMovieDetail()
    // console.log(res)
  }
  getData()

  return (
    <>
      <p>detail</p>
      <div>{detail}</div>
    </>
  )
}

export default Detail
