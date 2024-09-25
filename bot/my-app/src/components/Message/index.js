// Write your code here

import './index.css'

const Message = props => {
  const {isLoggedIn} = props

  const greeting = isLoggedIn ? 'Welcome User' : 'Please Login'

  return <h1 className="msg-heading">{greeting}</h1>
}

export default Message