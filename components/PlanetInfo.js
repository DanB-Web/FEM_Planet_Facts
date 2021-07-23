import { useState, useEffect } from 'react'
import Buttons from '@/components/Buttons'
import SourceSVG from '../assets/icon-source.svg'
import styles from '@/styles/planetinfo.module.scss'

const PlanetInfo = ({planet, view, setView}) => {

  const [content, setContent] = useState('')
  
  useEffect(() => {
    if (view.internal) {
      setContent({
        contentText: planet.structure.content,
        contentUrl: planet.structure.source
      })
    } else if (view.geology) {
      setContent({
        contentText: planet.geology.content,
        contentUrl: planet.geology.source
      })
    } else if (view.overview) {
      setContent({
        contentText: planet.overview.content,
        contentUrl: planet.overview.source
      })
    }
  }, [view, planet])

  return (
    <div className={styles.container}>

      <h1 className={styles.title}>{planet.name}</h1>

      <p className={styles.content}>{content.contentText}</p>

      <div className={styles.source}>
        <cite>Source:</cite>
        <a href={content.contentUrl} target="_blank" rel="noreferrer">Wikipedia</a>
        <SourceSVG/>
      </div>

      <Buttons view={view} setView={setView} planet={planet}/>
    </div>
  )
}

export default PlanetInfo