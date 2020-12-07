import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles.sass';

const Footer = () => (
  <div className="footer">
    <div className="wrapper">
      <p className="left">
        Made by
        <a href="https://www.linkedin.com/in/nicolasdanelon/"
           target="_blank"
           rel="noreferrer"
        >
          Nicolás Danelón
        </a>
      </p>
      <p className="right">
        <a href="https://github.com/nicolasdanelon/nicolasdanelon.github.io/"
           target="_blank"
           rel="noreferrer"
        >
          View the source code <FontAwesomeIcon icon="code" />
        </a>
      </p>
    </div>
  </div>
)

export default Footer;
