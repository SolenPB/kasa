import { useState } from "react";


function Carousel(props){
  const[index, setIndex] = useState(0);
  const length = props.pictures.lenght;
  console.log(props.pictures.length);

  function Previous(){
  const newIndex = index -1;
  setIndex(newIndex < 0 ? length -1 : newIndex);
  };

  function Next(){
  const newIndex = index + 1;
  setIndex(newIndex >= length ? 0 : newIndex);
  };

  return(
    <div className="slide__slide-pictures__carousel">
      <button className="btn-previous" onClick={Previous}></button>
      <button className="btn-next"onClick={Next}></button>
      <img src={props.pictures[index]} alt="" className="slide__slide-pictures__carousel__carousel-pictures"/>
    </div>
  );
};

export default Carousel


