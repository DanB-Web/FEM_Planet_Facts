import Link from 'next/link'
import Layout from '@/components/Layout'
import styles from '@/styles/mobilenav.module.scss'

const MobileNav = () => {
  return (
    <Layout>
      <nav className={styles.container}>
        <ul>
          <li>
            <span>
              <div className={styles.mercury}></div>
            </span> 
            <Link href='/planets/Mercury'>
              <a>Mercury</a>    
            </Link>
            <p>{'>'}</p>
          </li>
          <li>
            <span>
              <div className={styles.venus}></div> 
            </span>
            <Link href='/planets/Venus'>
              <a>Venus</a>
            </Link>
            <p>{'>'}</p>
          </li>
          <li>
            <span>
              <div className={styles.earth}></div> 
            </span>
            <Link href='/planets/Earth'>
              <a>Earth</a>
            </Link>
            <p>{'>'}</p>
          </li>
          <li>
            <span>
              <div className={styles.mars}></div> 
            </span>  
            <Link href='/planets/Mars'>
              <a>Mars</a>
            </Link>
            <p>{'>'}</p>
          </li>
          <li>
            <span>
              <div className={styles.jupiter}></div> 
            </span>
            <Link href='/planets/Jupiter'>
              <a>Jupiter</a>
            </Link>
            <p>{'>'}</p>
          </li>
          <li>
            <span>
              <div className={styles.saturn}></div> 
            </span>
            <Link href='/planets/Saturn'>
              <a>Saturn</a>
            </Link>
            <p>{'>'}</p>
          </li>
          <li>
            <span>
              <div className={styles.uranus}></div> 
            </span>
            <Link href='/planets/Uranus'>
              <a>Uranus</a>
            </Link>
            <p>{'>'}</p>
          </li>
          <li>
            <span>
              <div className={styles.neptune}></div> 
            </span>
            <Link href='/planets/Neptune'>
              <a>Neptune</a>
            </Link>
            <p>{'>'}</p>
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default MobileNav