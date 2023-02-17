import { useState, useEffect } from 'react';
import './App.css';
import Card from './content/Card/card';
import Title from './content/Title-searchBar/title';
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';

function App() {

  const url = 'https://monsters-api-stacey.herokuapp.com/api/monsters'
  const [monsterData, setMonsterData] = useState([]);
  
  useEffect(() => {
    fetch(url)
      .then(response =>
        response.json())
      .then(data =>
        setMonsterData(data),
      )
  }, [])

  // set state search bar
  const [name, setName] = useState("")
  const type = (e) => {
    setName(e.target.value);
    setId("")
  }

  // set state random button search
  const [id, setId] = useState("")

  const handleClick = () => {
    setId((monsterData[Math.floor(Math.random() * monsterData.length)]._id))
    setName("")
  }

  // Modal constants
  const [show, setShow] = useState(false);
  
  // Modal contenet
  const [monName, setMonName] = useState("");
  const [monDes, setMonDes] = useState("");
  const [monType, setType] = useState("");
  const [monSpecies, setMonSpecies] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setShow(true);
    setMonName(e.target.innerText);
    setMonDes(e.target.dataset.description);
    setType(e.target.dataset.type);
    setMonSpecies(e.target.dataset.species);
  }

  return (
    <div className="App">

      <div className="pic"></div>
      
      <Modal className="Modal" show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>{monName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{monDes}</Modal.Body>
        <Modal.Body>Monster Type : {monType}</Modal.Body>
        <Modal.Body>Species : {monSpecies}</Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>

      <Title type={type} handleClick={ handleClick}/>

      <div className="Contents">

        <div className="listMonsters">

          {
            monsterData.map((monster) => monster._id.includes(id) && monster.name.toLowerCase().includes(name) &&  (
              < Card name={monster.name}
                handleShow={handleShow}
                description={monster.description}
                type={monster.type}
                species={monster.species} />)
            )
          }
          
        </div>
      
      </div>
    </div>
  );
}

export default App;
