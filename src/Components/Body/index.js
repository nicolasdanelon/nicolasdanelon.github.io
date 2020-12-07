import IconBox from "./IconBox";
import { tools, languages } from './data';
import './styles.sass';

const randomize = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const Body = () => (
  <>
    {/*<div className="container">
      <h3>Hi, I write webapps</h3>
    </div>*/}

    <div className="body">
      <h3>Frameworks, libraries, languages and tools I use</h3>
        <div className="wrapper">
        {randomize([...tools, ...languages]).map((item, index) => (
          <IconBox
            key={`tools_${index}_${item.label.toLowerCase()}`}
            resource={item.icon}
            label={item.label}
            color={item.color}
          />
        ))}
      </div>
    </div>
  </>
)

export default Body;
