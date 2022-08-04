import { useParams } from 'react-router-dom'

export default function AboutId() {
  const params = useParams()

  console.log(params, 'user')
  return (
    <div className='cw-base-shadow'>
      <p>{params.id}</p>
    </div>
  )
}
