import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Layout from '@/components/Layout'
import PlanetInfo from '@/components/PlanetInfo'
import PlanetFacts from '@/components/PlanetFacts'
import { imageSizer } from '@/utils/images'
import { planetData } from '../../data/planetData'
import styles from '@/styles/planet.module.scss'

const Planet = ({planet}) => {

  const router = useRouter()

  const [view, setView] = useState({
    overview: true,
    internal: false,
    geology: false
  })

  const [imageSize, setImageSize] = useState(400)

  //RESET TO OVERVIEW ON EVERY ROUTE CHANGE
  useEffect(() => {
    setView({
      overview: true,
      internal: false,
      geology: false
    })
    setImageSize(imageSizer(planet.name))
  }, [router, planet.name])

  const imageSelector = () => {
    if (view.internal) { 
      return (
        <Image 
          width={imageSize} 
          height={imageSize} 
          //layout='intrinsic'
          src={`/images/planet-${planet.name.toLowerCase()}-internal.svg`} 
          alt={`${planet.name} Internal Image`}></Image>
      )
    }
    else if (view.geology) {
      return (
        <Image 
          width={350} 
          height={350} 
          //layout='intrinsic'
          src={`/images/geology-${planet.name.toLowerCase()}.png`} 
          alt={`${planet.name} Geology Image`}></Image>
      )
    }
    else {
      return (
        <Image 
          width={imageSize} 
          height={imageSize} 
          //layout='intrinsic'
          src={`/images/planet-${planet.name.toLowerCase()}.svg`} 
          alt={`${planet.name} Overview Image`}></Image>
      )
    }
  }

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.planetImage}>
          {imageSelector()}
        </div>
        <PlanetInfo 
          view={view}
          setView={setView}
          planet={planet}/>
      </div>
      <PlanetFacts planet={planet}/>
    </Layout>
  )
}

export default Planet

//GET PLANET NAMES FOR URL PARAM
export async function getStaticPaths() {

  const paths = planetData.map(planet => (
    {params: {planet: planet.name}}
  ))

  //THIS PASSES ONTO getStaticProps...
  return {
    paths,
    fallback: false //404 if path not found
  }
}

//PASS PLANET DATA INTO 'Planet' COMPONENT AS PROPS
export async function getStaticProps({params}) {

  const planet = planetData.filter(planet => planet.name === params.planet)

  return {
    props: {
      planet: planet[0]
    }
    
  }
}
