import { useRoutes } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import Top from '~/components/Top'
import Body from '~/components/Body'
import Layout from '~/components/Layout'
import About from '~/pages/About'
import Home from '~/pages/Home'
import Grid from '~/pages/Grid'
import Css from '~/pages/Css'
import User from '~/pages/Users/_id'
import Users, { UsersWrap, LoginPage } from '~/pages/Users'

export default function App() {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/users',
          element: <Users />,
          children: [
            {
              index: true,
              element: <UsersWrap />,
            },
            {
              path: '/users/user-login',
              element: <LoginPage />,
            },
          ],
        },
        { path: '/grid', element: <Grid /> },
        { path: '/css', element: <Css /> },
        { path: '*', element: <div>404</div> },
      ],
    },
  ]
  const router = useRoutes(routes)

  return (
    <div className='App'>
      <Top />
      <Body />

      {router}
    </div>
  )
}
