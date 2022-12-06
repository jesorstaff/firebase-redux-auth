import { Link } from "react-router-dom";
import { SignUp } from "../components/SignUp";

const RegisterPage = () => {
  return <>
    <h2>Register Page</h2>
    <SignUp />
    <Link to="/login">Go to login page</Link>
  </>
}

export default RegisterPage
