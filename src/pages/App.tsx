import { Routes, Route } from 'react-router-dom'
import About from '~/pages/About'
import Home from '~/pages/Home'
import Grid from '~/pages/Grid'

export default function App() {
  return (
    <div className='App'>
      <header className='bg-full bg-[#f86] p-2'>这是header</header>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/grid' element={<Grid />} />
      </Routes>
    </div>
  )
}
