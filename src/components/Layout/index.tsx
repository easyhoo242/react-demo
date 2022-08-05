import { Link, Outlet } from 'react-router-dom'

const CURRENT_USER = 23

export default function Layout() {
  return (
    <>
      <section className='cw-base-shadow flex items-center justify-between text-[12px] uppercase'>
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
      </section>

      <div className='cw-base-shadow'>
        <Outlet />
      </div>
    </>
  )
}
