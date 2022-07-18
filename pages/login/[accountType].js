import { useRouter } from 'next/router'
import Document from 'next/document'
import NotFound from '../../components/NotFound'
import axios from 'axios'
import styles from '../../styles/Login.module.css'


export default function Login() {
  // Local variables
  const router = useRouter()
  const { accountType } = router.query
  const valid = ['student', 'teacher', 'admin']
  let error = '' // Hide any errors till new one is recieved

  // Define functions
  const login = () => {
    let loginObject;
    if (accountType == 'student') loginObject = JSON.stringify({ sid: Document.getElementById('id').value, password: Document.getElementById('password').value })
    if (accountType == 'teacher') loginObject = JSON.stringify({ tid: Document.getElementById('id').value, password: Document.getElementById('password').value })
    if (accountType == 'admin') loginObject = JSON.stringify({ aid: Document.getElementById('id').value, password: Document.getElementById('password').value })

    axios.post(`${process.env.API_URL}/${accountType}/login`,
      loginObject,
      { headers: { 'Content-Type': 'application/json' }, withCredentials: true }
    )
    .catch(function (error) {
      error = error.response.data.message
    }).then(res => {
      if (res.data.success) {
        // Redirect to dashboard
        // this.$router.push(`/${accountType}-dashboard`)
      } else error = res.data.message
    })
  }
  
  const isAuthenticated = () => {
    axios.get(`${process.env.API_URL}/${accountType}`, { withCredentials: true })
    .then((res) => {
      if (res.data.success) {
        // redirect to dashbaord
        this.$router.push('/student-dashboard')
      }
    })
  }

  if (!valid.includes(accountType)) return (
    <div>
      <NotFound />
    </div>
  )

  isAuthenticated()

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
              <div className={`${styles.form_group}`}><label for="id">{ accountType } ID</label><input type="text" id="id" name="id" required="required" /></div>
              <div className={`${styles.form_group}`}><label for="password">Password</label><input type="password" id="password" name="password" required="required" /></div>
              <div className={`${styles.form_group}`}><a className={`${styles.form_recovery}`} href="#">Forgot Password?</a></div>
              <div className={`${styles.form_group}`}><button onclick={login()} type="submit">Log In</button></div>
            </form>
          </div>
        </div>
        <p className={styles.error_msg}>{ error }</p>
      </div>
    </div>
  )
}
