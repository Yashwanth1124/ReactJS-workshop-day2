// Write your code here
import './index.css'

const Login = props => {
  const {login} = props
  // console.log(login)
  return (
    <button className="knob" type="button" onClick={login}>
      Login
    </button>
  )
}

export default Login