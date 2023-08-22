import { useState } from "react";
import ChevronLeft from "../../assets/chevron-left";
import ChevronRight from "../../assets/chevron-right";

function Carousel(props){
  const[index, setIndex] = useState(0);
  const length = props.pictures.length;

  function Previous(){
  const newIndex = index -1;
  setIndex(newIndex < 0 ? length -1 : newIndex);
  };

  function Next(){
  const newIndex = index + 1;
  setIndex(newIndex >= length ? 0 : newIndex);
  };

  return(
    <div className="slide__carousel">
        <button className="slide__carousel__btn-scroll slide__slide-pictures__carousel__previous" onClick={Previous}><ChevronLeft/></button>
          <img src={props.pictures[index]} alt="" className="slide__carousel__carousel-pictures"/>
          <span className="slide__carousel__counter">{index +1}/{length}</span>
        <button className="slide__carousel__btn-scroll slide__carousel__next"onClick={Next}><ChevronRight /></button>
    </div>
  );
};

export default Carousel


