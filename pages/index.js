import Layout from '@/components/Layout'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Home = () => {

  const router = useRouter()

  useEffect(() => {
    router.push('./planets/Earth')
  }, [router])

  return (
    <Layout>
      Loading...
    </Layout>
  )
}

export default Home
