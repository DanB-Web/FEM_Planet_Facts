import styles from '@/styles/mobilebuttons.module.scss'

const MobileButtons = ({setView, view, planet}) => {

  //'view' to style selected button
  
  const overviewView = {
    overview: true,
    internal: false,
    geology: false
  }
  const internalView = {
    overview: false,
    internal: true,
    geology: false
  }
  const geologyView = {
    overview: false,
    internal: false,
    geology: true
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <button
          className={`${view.overview && "mobile-" + planet.name}`} 
          onClick={() => setView(overviewView)}>
          <p>Overview</p>
        </button>
        <button 
          className={`${view.internal && "mobile-" + planet.name}`} 
          onClick={() => setView(internalView)}>
          <p>Structure</p>
        </button>
        <button 
          className={`${view.geology && "mobile-" + planet.name}`}  
          onClick={() => setView(geologyView)}>
          <p>Surface</p>
        </button>
      </div>  
    </div>
  )
}

export default MobileButtons