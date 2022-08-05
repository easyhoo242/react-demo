import * as React from 'react'
import { createContext, useContext, useState } from 'react'
import {
  Link,
  Navigate,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import { fakeAuthProvider } from '~/components/Home/auth'

interface AuthContextType {
  user: any
  signin: (user: string, callback: VoidFunction) => void
  signout: (callback: VoidFunction) => void
}

const AuthContext = createContext<AuthContextType>(null!)

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null)

  const signin = (newUser: string, callback: VoidFunction) =>
    fakeAuthProvider.signin(() => {
      setUser(newUser)
      callback()
    })

  const signout = (callback: VoidFunction) =>
    fakeAuthProvider.signout(() => {
      setUser(null)
      callback()
    })

  const value = { user, signin, signout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

const useAuth = () => useContext(AuthContext)
function AuthState() {
  const auth = useAuth()
  const navigate = useNavigate()

  if (!auth.user) {
    return <p> 您还未登录 </p>
  }

  return (
    <>
      欢迎您：{auth.user}
      <button onClick={() => auth.signout(() => navigate('/'))}>登出</button>
    </>
  )
}

function RequiresAuth({ children }: { children: JSX.Element }) {
  const auth = useAuth()
  const location = useLocation()

  if (!auth.user) {
    return <Navigate to='/user-login' state={{ from: location }} replace />
  }

  return children
}

export function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const auth = useAuth()

  // @ts-ignore
  const from = location.state?.from?.pathname || '/users'

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    let formData = new FormData(event.currentTarget)
    let username = formData.get('username') as string

    auth.signin(username, () => {
      navigate(from, { replace: true })
    })
  }

  return (
    <div>
      <p>你必须先在 {from} 页面进行登录</p>

      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name='username' type='text' />
        </label>{' '}
        <button type='submit'>登录</button>
      </form>
    </div>
  )
}

export function UsersWrap() {
  return (
    <>
      <AuthState />

      <div>
        <Link className='mr-4' to='/users/user-login'>
          去登录
        </Link>
        <Link to='/users'>主页</Link>
      </div>
    </>
  )
}

export default function Users() {
  return (
    <>
      <div>User</div>

      <AuthProvider>
        <Outlet />
      </AuthProvider>
    </>
  )
}
