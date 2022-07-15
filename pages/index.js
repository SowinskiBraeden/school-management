import Head from 'next/head'
import Link from 'next/link'
import Button from 'react-bootstrap/Button'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>School Management</title>
        <meta name="description" content="The frontend website for a school management system accessible by staff and students." />
      </Head>

      <main>
        <h1 className={styles.title}>Welcome</h1>

        <div className={styles.container}>
          <h3>Login to...</h3>
          <div className={styles.login_links}>
            <Link href="/login/student">
              <Button variant='success' className={styles.link} size="lg">
                STUDENT
              </Button>
            </Link>
            <Link href="/login/teacher">
              <Button variant='primary' className={styles.link} size="lg">
                TEACHER
              </Button>
            </Link>
            <Link href="/login/admin">
              <Button variant='dark' className={styles.link} size="lg">
                ADMIN
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
