import { Button } from 'react-vant'
import { requestMovieDetailData } from '~/api'
import { useState } from 'react'

const Detail = () => {
  const [detail, setDetail] = useState({})

  const getData = async () => {
    const res = await requestMovieDetailData()
    console.log(res)
  }
  getData()

  return (
    <>
      <p>detail</p>
      <div>123</div>
      <Button> asd</Button>
    </>
  )
}

export default Detail
