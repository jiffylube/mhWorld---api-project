import { useState, useEffect } from 'react';
import './App.css';
import Card from './content/Card/card';
import Title from './content/Title-searchBar/title';

function App() {

  const url = 'https://monsters-api-stacey.herokuapp.com/api/monsters'
  const [monsterData, setMonsterData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response =>
        response.json())
      .then(data =>
        setMonsterData(data),
        // console.log(data[0].name)
      )
  }, [])

  return (
    <div className="App">
      <Title />
      
      <div className="Contents">

        <div className="listMonsters">

          {
            monsterData.map((monster) =>
              < Card monster={monster} />
            )
          }
          
        </div>

        
      </div>
    </div>
  );
}

export default App;
