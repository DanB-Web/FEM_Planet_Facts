import Link from 'next/link'
import styles from '@/styles/header.module.scss'

const Header = () => {

  return (
    <div className={styles.container}>
      <h1>The Planets</h1>
      <nav>
        <ul>
          <li>
            <Link href='/planets/Mercury'>
              <a>Mercury</a>
            </Link>
          </li>
          <li>
            <Link href='/planets/Venus'>
              <a>Venus</a>
            </Link>
          </li>
          <li>
            <Link href='/planets/Earth'>
              <a>Earth</a>
            </Link>
          </li>
          <li>
            <Link href='/planets/Mars'>
              <a>Mars</a>
            </Link>
          </li>
          <li>
            <Link href='/planets/Jupiter'>
              <a>Jupiter</a>
            </Link>
          </li>
          <li>
            <Link href='/planets/Saturn'>
              <a>Saturn</a>
            </Link>
          </li>
          <li>
            <Link href='/planets/Uranus'>
              <a>Uranus</a>
            </Link>
          </li>
          <li>
            <Link href='/planets/Neptune'>
              <a>Neptune</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    
  )
}

export default Header