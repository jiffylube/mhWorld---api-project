function Card(fatty) {


  return (

    <div className="Card"
      key={fatty._id}
      onClick={fatty.handleShow}
      data-description={fatty.description}
      data-type={fatty.type}
      data-species={fatty.species}>

      {fatty.name}

    </div>

  );

}

export default Card;

