function Card(fatty) {


  return (

    <div className="Card">

      <div key={fatty._id}
        onClick={fatty.handleShow}
        data-description={fatty.description}
        data-type={fatty.type}
        data-species={fatty.species}>{fatty.name}</div>
      {/* <div>{monster.description}</div> */}

    </div>


  );

}

export default Card;

