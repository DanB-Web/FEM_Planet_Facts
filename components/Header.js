import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '@/styles/header.module.scss'
import BurgerSVG from '../assets/icon-hamburger.svg'

const Header = () => {

  const router = useRouter()

  const openMobileNav = () => {
    router.push('../mobileNav')
  }

  return (
    <div className={styles.container}>
      <h1>The Planets</h1>
      <nav>
        <ul>
          <li>
            <Link href='/planets/Mercury'>
              <a className={styles.mercury}>Mercury</a>
            </Link>
          </li>
          <li>
            <Link href='/planets/Venus'>
              <a className={styles.venus}>Venus</a>
            </Link>
          </li>
          <li>
            <Link href='/planets/Earth'>
              <a className={styles.earth}>Earth</a>
            </Link>
          </li>
          <li>
            <Link href='/planets/Mars'>
              <a className={styles.mars}>Mars</a>
            </Link>
          </li>
          <li>
            <Link href='/planets/Jupiter'>
              <a className={styles.jupiter}>Jupiter</a>
            </Link>
          </li>
          <li>
            <Link href='/planets/Saturn'>
              <a className={styles.saturn}>Saturn</a>
            </Link>
          </li>
          <li>
            <Link href='/planets/Uranus'>
              <a className={styles.uranus}>Uranus</a>
            </Link>
          </li>
          <li>
            <Link href='/planets/Neptune'>
              <a className={styles.neptune}>Neptune</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.burger} onClick={openMobileNav}>
        <BurgerSVG/>
      </div>
      
    </div>
    
  )
}

export default Header