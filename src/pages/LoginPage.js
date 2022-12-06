import { Link } from "react-router-dom";
import { Login } from "../components/Login";

const LoginPage = () => {
  return <>
    <h1>Login</h1>
    <Login />
    <Link to="/register">Go to Register page</Link>
  </>
}

export default LoginPage
