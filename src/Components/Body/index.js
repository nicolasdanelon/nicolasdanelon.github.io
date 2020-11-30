import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as brands from '@fortawesome/free-brands-svg-icons' // @fortawesome/free-regular-svg-icons
import './styles.sass';

const Icon = (resource, label) => {
  return (
    <div className="icon-box">
      <FontAwesomeIcon icon={resource} style={{fontSize: '80px'}}/>
      <p className="icon-box">
        {label}
      </p>
    </div>
  )
}

const Body = () => (
  <div className="body">
    <h3>Things I use</h3>
    <div className="wrapper">
      <div className="icon-box">
        <FontAwesomeIcon icon={brands.faLinux} style={{ fontSize: '80px' }} />
        <p>Linux</p>
      </div>
      <div className="icon-box">
        <FontAwesomeIcon icon={brands.faAws} style={{ fontSize: '80px' }} />
        <p>AWS</p>
      </div>
      <div className="icon-box">
        <FontAwesomeIcon icon={brands.faLinode} style={{ fontSize: '80px' }} />
        <p>Linode</p>
      </div>
      <div className="icon-box">
        <FontAwesomeIcon icon={brands.faDocker} style={{ fontSize: '80px' }} />
        <p>Docker</p>
      </div>
    </div>

    <h3>Languages I know</h3>
    <div className="wrapper">
      <div className="icon-box">
        <FontAwesomeIcon icon={brands.faReact} style={{ fontSize: '80px' }} />
        <p>React</p>
      </div>
      <div className="icon-box">
        <FontAwesomeIcon icon={brands.faNode} style={{ fontSize: '80px' }} />
        <p>Node</p>
      </div>
      <div className="icon-box">
        <FontAwesomeIcon icon={brands.faJs} style={{ fontSize: '80px' }} />
        <p>Javascript</p>
      </div>
      <div className="icon-box">
        <FontAwesomeIcon icon={brands.faPhp} style={{ fontSize: '80px' }} />
        <p>php</p>
      </div>
    </div>

    <h3>Things I use</h3>
    <div className="wrapper">
      <div className="icon-box">
        <FontAwesomeIcon icon={brands.faLaravel} style={{ fontSize: '80px' }} />
        <p>Laravel</p>
      </div>
    </div>
  </div>
)

export default Body;
