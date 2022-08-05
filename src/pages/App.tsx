import { Routes, Route } from 'react-router-dom'
import Top from '~/components/Top'
import Body from '~/components/Body'
import Layout from '~/components/Layout'
import About from '~/pages/About'
import Home from '~/pages/Home'
import Grid from '~/pages/Grid'
import Css from '~/pages/Css'
import User from '~/pages/Users/_id'

export default function App() {
  return (
    <div className='App'>
      <Top />
      <Body />

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/grid' element={<Grid />} />
          <Route path='/css' element={<Css />} />

          <Route path='/users'>
            <Route path=':id' element={<User />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}
