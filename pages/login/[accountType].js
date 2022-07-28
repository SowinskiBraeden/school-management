import { NextResponse } from 'next/server'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import defineLoginObject from '../../util/defineLoginObject'
import NotFound from '../../components/NotFound'
import axios from 'axios'
import styles from '../../styles/Login.module.css'


export default function Login() {
  // Local variables
  const router = useRouter()
  const { accountType } = router.query
  const valid = ['student', 'teacher', 'admin']
  let [error, setError] = useState("")
  
  const [loading, setLoading] = useState(false)
  const [id, setID] = useState("")
  const [password, setPassword] = useState("")

  // Define functions
  const login = async (e) => {
    setError('')
    setLoading(true)
    e.preventDefault()
    
    const loginObject = defineLoginObject(accountType, id, password)

    axios.post(`${process.env.API_URL}/${accountType}/login`,
      loginObject,
      { headers: { 'Content-Type': 'application/json' }, withCredentials: true }
    )
    .catch(function (error) {
      setError(error.response.data.message)
    }).then(res => {
      // Redirect to dashboard on successful login
      if (res.data.success) {
        console.log('authenticated successfully')
        router.push(`/dashboard/${accountType}`)
      } else {
        setError(res.data.message)
        setLoading(false)
      }
    })
  }

  const isAuthenticated = (type) => {
    axios.get(`${process.env.API_URL}/${type}`, { withCredentials: true })  
      .catch((err) => {
        if (err.response.data.success) return router.push(`/dashboard/${accountType}`)
      })
  }

  if (!valid.includes(accountType)) return (<div><NotFound/></div>)

  isAuthenticated(accountType)

  if (loading) return (<div className={styles.loader}></div>)

  return (
    <div>
      <div className={`${styles.form}` }>
        <div className={`${styles.form_toggle}`}></div>
        <div className={`${styles.form_panel} ${styles.one}`}>
          <div className={`${styles.form_header}`}>
            <h1>{ accountType } Login</h1>
          </div>
          <div className={`${styles.form_content}`}>
            <form onSubmit={(e) => login(e)}>
              <div className={`${styles.form_group}`}>
                <label htmlFor="id">{ accountType } ID</label>
                <input 
                  type="text"
                  name="id"
                  id="id"
                  onChange={(e) => setID(e.target.value)}
                  required="required" />
              </div>
              <div className={`${styles.form_group}`}>
                <label htmlFor="password">Password</label>
                <input 
                  type="password"
                  name="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required="required" /></div>
              <div className={`${styles.form_group}`}><a className={`${styles.form_recovery}`} href="#">Forgot Password?</a></div>
              <div className={`${styles.form_group}`}><button type="submit">Log In</button></div>
            </form>
          </div>
          <p className={styles.error_msg}>{ error }</p>
        </div>
      </div>
    </div>
  )
}
