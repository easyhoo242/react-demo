import { Button } from 'react-vant'
import { requestMovieDetailData } from '~/api'

const Detail = () => {
  const getData = async () => {
    const res = await requestMovieDetailData()
    console.log(res)
  }
  getData()

  return (
    <>
      <p>detail</p>
      <Button> asd</Button>
    </>
  )
}

export default Detail
