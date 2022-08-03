import { Routes, Route, Link } from 'react-router-dom'
import About from '~/pages/About'
import Home from '~/pages/Home'
import Grid from '~/pages/Grid'
import Css from '~/pages/Css'

export default function App() {
  return (
    <div className='App'>
      <header className='bg-[#ccc] rounded-md px-3 py-1 flex items-center justify-between font-semibold color-[#f88] shadow-sm shadow-gray-50'>
        <Link className='color-[#f88]' to='/'>
          HOME
        </Link>

        <Link className='color-[#f34]' to='/about'>
          ABOUT
        </Link>

        <Link className='color-[#d56]' to='/grid'>
          GRID
        </Link>

        <Link className='color-[#d56]' to='/css'>
          Css
        </Link>
      </header>

      <div className='rounded-md px-15px py-20px m-1 shadow-dark-50 shadow-sm'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/grid' element={<Grid />} />
          <Route path='/css' element={<Css />} />
        </Routes>
      </div>
    </div>
  )
}
