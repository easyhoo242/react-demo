import { Link } from 'react-router-dom'
import React, { useContext } from 'react'

const AboutContext = React.createContext('')
const { Provider: AboutProvider } = AboutContext

interface ISon {
  name: string
  emitName: (name: string) => void
}
function AboutSon(props: ISon) {
  return (
    <div className='p-2 bg-[#ccc]'>
      <p>about 子组件</p>
      <div>{props.name}</div>

      <button onClick={() => props.emitName(`${props.name} newName`)}>
        子传父
      </button>

      <AboutGrandSon />
    </div>
  )
}

function AboutGrandSon() {
  const ctx = useContext(AboutContext)

  return (
    <>
      <p>about孙子组件</p>1<div>身高：{ctx}</div>
    </>
  )
}

export default function About() {
  const changeName = (res: string) => console.log(res)

  return (
    <>
      <main>
        <p>about父组件</p>
      </main>

      <hr />

      <AboutProvider value='1.88'>
        <AboutSon name='wdl' emitName={changeName} />

        <AboutGrandSon />
      </AboutProvider>

      <div>
        <Link to='/about'>about</Link>
        <Link to='/'>home</Link>
      </div>
    </>
  )
}
