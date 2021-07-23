import Head from 'next/head'
import Header from './Header'
import styles from '@/styles/layout.module.scss'

const Layout = ({title, keywords, description, children}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description}></meta>
        <meta name='keywords' content={keywords}></meta>
      </Head>
      <Header/>
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