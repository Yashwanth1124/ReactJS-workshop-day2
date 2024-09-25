// Write your code here
import './index.css'

const Logout = props => {
  const {logout} = props

  return (
    <button className="knob" type="button" onClick={logout}>
      Logout
    </button>
  )
}

export default Logout