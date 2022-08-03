export default function Father() {
  function handleOnclick(res: string) {
    console.log(res)
  }
  return (
    <>
      <div></div>
      <Son title='9999' handleOnclick={handleOnclick} />
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
