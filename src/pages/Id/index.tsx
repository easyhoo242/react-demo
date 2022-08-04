import { useParams } from 'react-router-dom'

export default function Id() {
  const res = useParams()

  console.log(res)
  return (
    <>
      <div>{res.id}</div>
    </>
  )
}
