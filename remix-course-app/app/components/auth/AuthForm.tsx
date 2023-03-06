import { FaLock } from "react-icons/fa"

const AuthForm = () => {
  return (
    <form method="POST" className="form" id="auth-form">
      <div className="icon-img">
        <FaLock />
      </div>
      <p>
        <label htmlFor="email">Email Adress</label>
        <input type="email" id="email" name="email" required />
      </p>
      <p>
        <label htmlFor="email">Password</label>
        <input type="password" id="password" name="password" minLength={6} />
      </p>
      <div className="form-actions">
        <button>Login</button>
        <a href="/auth"> Login with existing user</a>
      </div>
    </form>
  )
}

export default AuthForm