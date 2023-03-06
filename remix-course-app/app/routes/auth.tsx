import AuthForm from "~/components/auth/AuthForm"
import authStyles from "~/styles/auth.css"

const AuthPage = () => {
  return <AuthForm />
}

export function links() {
  return [{ rel: 'stylesheet', href: authStyles}]
}

export default AuthPage