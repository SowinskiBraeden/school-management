import { useRouter } from 'next/router'
import NotFound from '../../components/NotFound'
import styles from '../../styles/Login.module.css'

export default function Login() {
  const router = useRouter()
  const { accountType } = router.query
  const valid = ['student', 'teacher', 'admin']

  if (!valid.includes(accountType)) return (
    <div>
      <NotFound />
    </div>
  )

  return (
    <div>
      <div className={`${styles.form}`}>
        <div className={`${styles.form_toggle}`}></div>
        <div className={`${styles.form_panel} ${styles.one}`}>
          <div className={`${styles.form_header}`}>
            <h1>{ accountType } Login</h1>
          </div>
          <div className={`${styles.form_content}`}>
            <form>
              <div className={`${styles.form_group}`}><label for="username">{ accountType } ID</label><input type="text" id="username" name="username" required="required" /></div>
              <div className={`${styles.form_group}`}><label for="password">Password</label><input type="password" id="password" name="password" required="required" /></div>
              <div className={`${styles.form_group}`}><a className={`${styles.form_recovery}`} href="#">Forgot Password?</a></div>
              <div className={`${styles.form_group}`}><button type="submit">Log In</button></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
