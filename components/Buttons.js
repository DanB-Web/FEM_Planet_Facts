import styles from '@/styles/buttons.module.scss'

const Buttons = ({setView, view, planet}) => {

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
    <div className={styles.container}>
      <button
        className={`${view.overview && "active-" + planet.name}`} 
        onClick={() => setView(overviewView)}>
        <span>01</span><p>Overview</p>
      </button>
      <button 
        className={`${view.internal && "active-" + planet.name}`} 
        onClick={() => setView(internalView)}>
        <span>02</span><p>Internal Structure</p>
      </button>
      <button 
        className={`${view.geology && "active-" + planet.name}`}  
        onClick={() => setView(geologyView)}>
        <span>03</span><p>Surface Geology</p>
      </button>
    </div>
  )
}

export default Buttons