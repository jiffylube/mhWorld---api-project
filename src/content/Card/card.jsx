function Card(fatty) {

  let { monster } = fatty

  return (

    <div className="Card" key={monster.species}>
      <div>{monster.name}</div>
      {/* <div>{monster.description}</div> */}
    </div>


  );

}

export default Card;

