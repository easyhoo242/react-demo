export default function Father() {
  function handleOnclick(res: string) {
    console.log(res)
  }
  return (
    <>
      <div>Home</div>
      <Son title='9999' handleOnclick={handleOnclick} />
    </>
  )
}

export function Son(props: any) {
  const title = '0000'
  return (
    <div className='cw-base-shadow'>
      HomeSon
      <br />
      <button
        onClick={() => {
          props.handleOnclick(title)
        }}
      >
        onClick
      </button>
    </div>
  )
}
