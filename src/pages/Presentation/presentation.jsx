import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import ActiveStar from "../../assets/active-star";
import InactiveStar from "../../assets/inactive-star";
import Carousel from "../../components/Carousel/Carousel";

function Slider() {
    const data = require('../../datas/destination.json');
    const filter = useParams();
    let dataFiltered ="";
    
    const[isOpenDescription, setIsOpenDescription] = useState(false);
    const[isOpenEquipments, setIsOpenEquipments] = useState(false);
    function OpenDescription(){
      setIsOpenDescription(true);
    }
    function CloseDescription(){
      setIsOpenDescription(false);
    }
    function OpenEquipments(){
      setIsOpenEquipments(true);
    }
    function CloseEquipments(){
      setIsOpenEquipments(false);
    }

    useEffect(() => {
      OpenDescription();
      CloseDescription();
      OpenEquipments();
      CloseEquipments();
    }, [])

    for( let i = 0; i < data.length; i++ ){
      if(filter.id === data[i].id) {
        dataFiltered = data[i];
      }
    }
    
    function ratingScale({noteValue}){
      const range = [1, 2, 3, 4, 5];
      const noteType = "{dataFiltered.rating}" === 'range' ? (
      <img src={ActiveStar} alt="red-star" />
      ) : (
      <img src={InactiveStar} alt="grey-star" />
    )
    return (
    <div>
      {range.map((rangeElem) => 
      noteValue >= rangeElem ? <span key={rangeElem.toString()}>{noteType}</span> : null
    )}
    </div>
    )
    
}
    return(
    <div className="slide">
        <div className="slide-pictures">
            <Carousel pictures={dataFiltered.pictures}/>
        </div>

        <div className="slide__title-host">
          <div className="slide__title-host__slide-title">
            <h2 className="slide__title-host__slide-title__title-location">{dataFiltered.title}</h2>
            <span className="slide__title-host__slide-title__city-location">{dataFiltered.location} </span>
          </div>

          <div className="slide__title-host__host">
            <span className="slide__title-host__host__host-name">{dataFiltered.host.name}</span>
            <img src={dataFiltered.host.picture} alt="" className="slide__title-host__host__host-picture"/>
          </div>
        </div>

        <div className="slide__tags-rating">
          <div className="slide__tags-rating__tags">
            <span className="slide__tags-rating__tags__tagElement" >{dataFiltered.tags[0]}</span>
            <span className="slide__tags-rating__tags__tagElement">{dataFiltered.tags[1]}</span>
          </div>

          <div className="slide__tags-rating__rating">
            <span>{ratingScale}</span>
          </div>
        </div>

        <div className="slide__info">
          <div className="slide__info__description">
            {isOpenDescription ? (<>
              <div className="slide__info__description__description-title">
                <h2>Description</h2>
                <button className="slide__info__description__description-title__btn-description" onClick={() => CloseDescription()}><FontAwesomeIcon icon={faChevronUp} /></button>
              </div> 
              <div className="slide__info__description__description-list">
                <p>{dataFiltered.description}</p>
              </div>
              </>  
                
            ) : (
              <div className="slide__info__description__description-title">
                  <h2>Description</h2>
                  <button className="slide__info__description__description-title__btn-description" onClick={() => OpenDescription()}><FontAwesomeIcon icon={faChevronUp} /></button>
              </div>
            )
              }
          </div>

          <div className="slide__info__equipments">
          {isOpenEquipments ? (<>
          <div className="slide__info__equipments__equipments-title">
            <h2>Équipements</h2>
            <button className="slide__info__equipments__equipments-title__btn-equipments" onClick={() => CloseEquipments()}><FontAwesomeIcon icon={faChevronUp} /></button>
          </div>
          <div className="slide__info__equipments__equipments-list">
            <span>{dataFiltered.equipments[0]}</span>
            <span>{dataFiltered.equipments[1]}</span>
            <span>{dataFiltered.equipments[2]}</span>
            <span>{dataFiltered.equipments[3]}</span>
            <span>{dataFiltered.equipments[4]}</span> 
          </div>
          </>
          ) : (
            <div className="slide__info__equipments__equipments-title">
              <h2>Équipements</h2>
              <button className="slide__info__equipments__equipments-title__btn-equipments" onClick={() => OpenEquipments()}><FontAwesomeIcon icon={faChevronUp} /></button>
            </div>
          )
          }    
          </div>
      </div>
    </div>
    )  
}  


export default Slider