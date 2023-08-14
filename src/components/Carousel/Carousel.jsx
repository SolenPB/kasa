import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

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
    <div className="slide__slide-pictures__carousel">
        <button className="slide__slide-pictures__carousel__btn-scroll" onClick={Previous}><FontAwesomeIcon icon={faChevronLeft} /></button>
        <img src={props.pictures[index]} alt="" className="slide__slide-pictures__carousel__carousel-pictures"/>
        <button className="slide__slide-pictures__carousel__btn-scroll"onClick={Next}><FontAwesomeIcon icon={faChevronRight} /></button>
    </div>
  );
};

export default Carousel


