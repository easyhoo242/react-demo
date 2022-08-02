import { Link, Route } from 'react-router-dom'

export default function About() {
  return (
    <>
      <main>
        <p>about</p>
      </main>

      <div>
        <Link to='/about'>about</Link>
        <Link to='/'>home</Link>
      </div>
    </>
  )
}
