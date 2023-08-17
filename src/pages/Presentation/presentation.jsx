import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Carousel from "../../components/Carousel/Carousel";
import RatingScale from "../../components/Carousel/Rating";
import Details from "../../components/Carousel/Details";
import Collapse from "../../components/Collapse/collapse";

function Slider(props) {
    const data = require('../../datas/destination.json');
    const filter = useParams();
    let dataFiltered ="";

    for( let i = 0; i < data.length; i++ ){
      if(filter.id === data[i].id) {
        dataFiltered = data[i];
      }
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
          {dataFiltered.tags.map((data, index) =>
            {
              return(
                <span key={index} className="slide__tags-rating__tags__tagElement">
                  {data}
                </span>
              )
            }
          )
          }
          </div>

          <div className="slide__tags-rating__rating">
            <RatingScale rating={dataFiltered.rating}/>
          </div>
        </div>

        <div className="slide__info">
          <Collapse title="Description" description={dataFiltered.description} />
          <Collapse title="Equipements" description={dataFiltered.equipments} />
        </div>
      </div>
    )  
}  


export default Slider