import Head from 'next/head'
import Header from './Header'
import styles from '@/styles/layout.module.scss'
import StarsSVG from '../assets/background-stars.svg'

const Layout = ({title, keywords, description, children}) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description}></meta>
        <meta name='keywords' content={keywords}></meta>
      </Head>
      <Header/>
      <div className={styles.background}></div>
      <StarsSVG className={styles.stars}/>
      <div className={styles.container}>
        {children}
      </div>
    </div>
  )
}

export default Layout

Layout.defaultProps = {
  title: 'The Planets',
  keywords: 'planets FEM next react javascript',
  description: 'A FEM Project'
}

//style={{backgroundImage: `url(${StarsSVG})`}}