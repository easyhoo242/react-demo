import { Outlet } from 'react-router-dom'

export default function Father() {
  function handleOnclick(res: string) {
    console.log(res)
  }
  return (
    <>
      <Son title='9999' handleOnclick={handleOnclick} />

      <div className='cw-base-shadow'>
        <Outlet />
      </div>
    </>
  )
}

export function Son(props: any) {
  const title = '0000'
  return (
    <>
      <button
        onClick={() => {
          props.handleOnclick(title)
        }}
      >
        onclick
      </button>
    </>
  )
}
