import { useState } from "react";


function Carousel(props){
  const[index, setIndex] = useState(0);
  const length = props.pictures.lenght;

  function Previous(){
  const newIndex = index -1;
  setIndex(newIndex < 0 ? length -1 : newIndex);
  };

  function Next(){
  const newIndex = index + 1;
  setIndex(newIndex >= length ? 0 : newIndex);
  };

  return(
    <div className="carousel">
      <button className="btn-previous" onClick={Previous}></button>
      <button className="btn-next"onClick={Next}></button>
      <img src={props.pictures[index]} alt=""/>
    </div>
  );
};

export default Carousel


