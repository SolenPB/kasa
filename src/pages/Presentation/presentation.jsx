import { useParams } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import RatingScale from "../../components/Carousel/Rating";
import Collapse from "../../components/Collapse/collapse";
import Footer from "../../components/Footer/footer"

export default function Slider(props) {
    const data = require('../../datas/destination.json');
    const filter = useParams();

    let dataFiltered ="";

    for( let i = 0; i < data.length; i++ ){
      if(filter.id === data[i].id) {
        dataFiltered = data[i];
      }
    }
    function Equipments(dataArray){
      return(<ul>
        {dataArray.map((data, index) => 
      {
        return(
          <li key={index} className="equipments">{data}</li>
        )
      }
      )}
      </ul>)
      
    }
    return(
    <div className="slide">

      <Carousel pictures={dataFiltered.pictures}/>

      <div className="slide__summary">
        <div className="slide__summary__sutitle-tags">
          <div className="slide__summarytitle-tags__slide-title">
            <h2 className="slide__title-tags__slide-title__title-location">{dataFiltered.title}</h2>
            <span className="slide__title-tags__slide-title__city-location">{dataFiltered.location} </span>
          </div>

          <div className="slide__title-tags__tags">
          {dataFiltered.tags.map((data, index) =>
            {
              return(
                <span key={index} className="slide__title-tags__tags__tagElement">
                  {data}
                </span>
              )
            }
          )
          }
          </div>
        </div>

        <div className="slide__host-rating">
        <div className="slide__host-rating__host">
            <span className="slide__host-rating__host__host-name">{dataFiltered.host.name}</span>
            <img src={dataFiltered.host.picture} alt="" className="slide__host-rating__host__host-picture"/>
          </div>

          <div className="slide__host-rating__rating">
            <RatingScale rating={dataFiltered.rating}/>
          </div>
        </div>

        <div className="slide__info">
          <Collapse title="Description" description={dataFiltered.description} />
          <Collapse title="Equipements" description={Equipments(dataFiltered.equipments)} /> 
        </div>
        <Footer />
      </div>
    </div>
    )
}