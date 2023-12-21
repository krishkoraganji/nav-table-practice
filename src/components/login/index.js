import './index.css'
import { Link } from 'react-router-dom'
function SignIn() {
  return (
    <div className='signIn'>
      <Link to='/signup'>Sign In</Link>
      <Link to='/'>Login</Link>
    </div>
  )
}
export default SignIn