import styles from '@/styles/planetfacts.module.css'

const PlanetFacts = ({planet}) => {
  return (
    <div className={styles.container}>
      <div className={styles.facts}>
        <div className={styles.fact}>
            <h4>Rotation Time</h4>
            <h1>{planet.rotation}</h1>
          </div>
          <div className={styles.fact}>
            <h4>Revolution Time</h4>
            <h1>{planet.revolution}</h1>
          </div>
          <div className={styles.fact}>
            <h4>Radius</h4>
            <h1>{planet.radius}</h1>
          </div>
          <div className={styles.fact}>
            <h4>Average Temp</h4>
            <h1>{planet.temperature}</h1>
          </div>
        </div> 
    </div>
  )
}

export default PlanetFacts