import Icon from './Icon'
import styles from '../styles/NotFound.module.css'

const NotFound = () => {
  return (
    <div>
      <div className={styles.body_styles}>
        <main>
          <div className={styles.container}>
            <div className={styles.float_container}>
              <div className={styles.float_child}>
                <Icon />
              </div>
              <div className={styles.float_child}>
                <h1 className={styles.h1_styles}>404</h1>
                <h2 className={styles.h2_styles}>UH OH! You're lost.</h2>
                <p>The page you are looking for does not exist.
                  How you got here is a mystery. But you can click the button below
                  to go back to the homepage.
                </p>
                <a href="/"><button className={styles.btn}>HOME</button></a>
              </div>
            </div>
          </div>
        </main>
      </div>
      </div>
  )
}

export default NotFound