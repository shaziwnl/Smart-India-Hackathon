


function Module(props:object) {

    const {title, image} = props;

  return (
    <>
      <img src={image}></img>
      <h2>{title}</h2>
      <button>START</button>
    </>
  )
}

export default Module