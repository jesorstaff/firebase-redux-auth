import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUser } from '../../store/slice/userSlice'
import { Form } from '../Form'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = (email, password) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user)
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken
        }))
        navigate('/')
      })
      .catch(() => alert('Invalid user'))
  }

  return (
    <Form title="Login" handleClick={handleLogin} />
  )
}

export { Login }