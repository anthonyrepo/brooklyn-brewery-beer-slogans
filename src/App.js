import Quote from './components/Quote'
import { useState } from 'react'
import './App.scss';
import BeerInfo from './beer_info.json'

const App = () => {
  let index = Math.floor(Math.random() * BeerInfo.length);
  const [beers, setBeers] = useState([BeerInfo[index]]);
  const [backgroundColor, setBackgroundColor] = useState(BeerInfo[index].backgroundColor);

  const onClick = () => {
    let index = Math.floor(Math.random() * BeerInfo.length);
    setBeers([BeerInfo[index], ...beers]);
    setBackgroundColor(BeerInfo[index].backgroundColor);
  }

  let key = 0;
  return (
    <div className="App" style={{backgroundColor: backgroundColor}}>
      <h1 id="title" style={{color: beers[0].cardColor}}>Brooklyn Brewery Beer Slogans</h1>
      <button style={{backgroundColor: beers[0].cardColor, color: beers[0].textColor}} onClick={onClick}>New Quote</button>
      {beers.map((item) =>
        <Quote  key={key++}
                info={item} />
      )}
    </div>
  );
}

export default App;
