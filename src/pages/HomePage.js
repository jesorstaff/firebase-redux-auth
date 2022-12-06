import { Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useAuth } from '../hooks/user-auth'
import { removeUser } from '../store/slice/userSlice'

const HomePage = () => {
  const dispatch = useDispatch()
  const { isAuth, email } = useAuth()

  return isAuth ? (
    <>
      <h1>Welcome </h1>
      <button onClick={() => dispatch(removeUser())} >Log Out { email }</button>
    </>
  ) : <Navigate to="/login" />
}

export default HomePage
