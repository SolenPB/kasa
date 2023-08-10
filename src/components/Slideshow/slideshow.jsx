import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ChevronUp from "../../assets/chevronup";

function Slideshow() {
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
    return(
    <div className="slide">

        <Carousel showThumbs={false}>
            {dataFiltered.pictures.map((data, index) => {
              return (<>
              <div className="slide-pictures" key={index}>
                <img src={dataFiltered.pictures[index]} alt="" />
              </div>
              </>
              )
            })}       
        </Carousel>
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

          <div className="slide__tags">
            <span className="slide__tags__tagElement" >{dataFiltered.tags[0]}</span>
            <span className="slide__tags__tagElement">{dataFiltered.tags[1]}</span>
          </div>

          <div className="slide__rating">
            <span>{dataFiltered.rating}</span>
          </div>

        <div className="info">
          <div className="description">
            {isOpenDescription ? (
              <div className="description-title">
                <h2>Description</h2>
                <button className="btn-description" onClick={() => CloseDescription()}>{ChevronUp}</button>
                <p>{dataFiltered.description}</p>
              </div>   
            ) : (
              <div className="description-title">
                <div className="btn">
                  <h2>Description</h2>
                  <button className="btn-description" onClick={() => OpenDescription()}>{ChevronUp}</button>
                </div>
              </div>
            )
              }
          </div>   
          <div className="equipments">
          {isOpenEquipments ? (
          <div className="equipment-title">
            <h2 className="equipments-title">Équipements</h2>
            <button className="btn-equipments" onClick={() => CloseEquipments()}>^</button>
            <span>{dataFiltered.equipments}</span> 
          </div>
          ) : (
            <div className="equipment-title">
              <h2>Équipements</h2>
              <button className="btn-equipments" onClick={() => OpenEquipments()}>^</button>
            </div>
          )
          }    
          </div>
      </div>
    </div>
    )  
}  

export default Slideshow