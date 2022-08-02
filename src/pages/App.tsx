import { Routes, Route, Link, Router } from 'react-router-dom'

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to='/'>index</Link>
        <Link to='/about'>About</Link>
      </nav>
    </>
  )
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Route path='/about'>
          <Link to='/'>index</Link>
          <Link to='/home'>Home</Link>
        </Route>
      </nav>
    </>
  )
}

function Main() {
  return (
    <>
      <div>主要</div>

      <div>
        <Link to={'/home'}> home </Link>
        <Link to={'/about'}> about </Link>
      </div>
    </>
  )
}

export default function App() {
  return (
    <div className='App'>
      <header className='bg-full bg-[#f86] p-2'>这是header</header>

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}
