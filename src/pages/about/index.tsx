import React, { useContext, useState } from 'react'

const AboutContext = React.createContext('')
const { Provider } = AboutContext

interface ISon {
  title: string
  emitName: (name: string) => void
}

function AboutSon(props: ISon) {
  return (
    <div className='cw-base-shadow'>
      <p>about 子组件</p>
      <div>{props.title}</div>

      <button onClick={() => props.emitName('子组件传来的title')}>
        子传父
      </button>

      <AboutGrandSon />
    </div>
  )
}

export function AboutGrandSon() {
  const height = useContext(AboutContext)

  return (
    <div className='cw-base-shadow'>
      <p>about孙子组件</p>1<div>身高：{height}</div>
    </div>
  )
}

export default function About() {
  const changeName = (res: string) => setTitle(res)
  const [title, setTitle] = useState('默认title')

  return (
    <>
      <main>
        <p>about父组件</p>

        <Provider value='1.88'>
          <AboutSon title={title} emitName={changeName} />
        </Provider>
      </main>
    </>
  )
}
