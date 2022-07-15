import Link from 'next/link'
import navStyles from '../stlyes/Nav.module.css'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav