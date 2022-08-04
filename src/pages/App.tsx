import { Routes, Route, Link } from 'react-router-dom'
import About from '~/pages/About'
import Home from '~/pages/Home'
import Grid from '~/pages/Grid'
import Css from '~/pages/Css'
import User from '~/pages/Users/_id'

const CURRENT_USER = 23

export default function App() {
  return (
    <div className='App'>
      <header className='cw-base-shadow flex items-center justify-between text-[12px] uppercase'>
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

        <Link className='color-[#d82]' to={`/users/${CURRENT_USER}`}>
          Users
        </Link>
      </header>

      <div className='cw-base-shadow'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/grid' element={<Grid />} />
          <Route path='/css' element={<Css />} />

          <Route path='/users'>
            <Route path=':id' element={<User />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}
