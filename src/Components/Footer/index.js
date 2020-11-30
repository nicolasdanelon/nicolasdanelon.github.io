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
          Nicolas Danelon
        </a>
      </p>
      <p className="right">
        <a href="https://github.com/nicolasdanelon/nicolasdanelon.github.io/"
           target="_blank"
           rel="noreferrer"
        >
          View the source code
        </a>
      </p>
    </div>
  </div>
)

export default Footer;
