import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import Collapse from "../../components/Collapse/collapse";
import Footer from "../../components/Footer/footer";
import ActiveStar from "../../assets/active-star";
import InactiveStar from "../../assets/inactive-star";


export default function Slider() {
    const data = require('../../datas/destination.json');
    const filter = useParams();

    const navigate = useNavigate();
    let dataFiltered ="";

    for( let i = 0; i < data.length; i++ ){
      if(filter.id === data[i].id) {
        dataFiltered = data[i];
      } else {
        navigate("../../components/Header/Error/error", {replace: true})
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

    function RatingScale(props){
      let n = 0;
      let note = [];
  
      while(n < 5){
        n++;
      if(n <= props.rating){
        note.push(<ActiveStar />)
      }
      else
      {
        note.push(<InactiveStar />)
      }
      }
  
  
    return (

    <div className="summary__host-rating__rating__ratingElement">
      {note.map((data, index) =>
        { 
  ;        return(
          <span key={index} className="summaryt__host-rating__rating__ratingElement__rating-star">
            {data}
          </span>
        )}
      )}
    </div>
    )
  
  }
    return(
    <div className="slide">

      <Carousel pictures={dataFiltered.pictures}/>

      <div className="summary">
        <div className="summary__titleTags">
          
            <h2 className="summary__titleTags__location">{dataFiltered.title}</h2>
            <span className="summary__titleTags__city">{dataFiltered.location} </span>
          

          <div className="summary__titleTags__tags">
          {dataFiltered.tags.map((data, index) =>
            {
              return(
                <span key={index} className="summary__titleTags__tags__tagElement">
                  {data}
                </span>
              )
            }
          )
          }
          </div>
        </div>

        <div className="summary__host-rating">
        <div className="summary__host-rating__host">
            <span className="summary__host-rating__host__host-name">{dataFiltered.host.name}</span>
            <img src={dataFiltered.host.picture} alt="" className="summary__host-rating__host__host-picture"/>
          </div>

          <div className="summary__host-rating__rating">
            <RatingScale rating={dataFiltered.rating}/>
          </div>
        </div>
      </div>

      
      <div className="info">
        <Collapse title="Description" description={dataFiltered.description} />
        <Collapse title="Equipements" description={Equipments(dataFiltered.equipments)} /> 
      </div>
      
      <Footer />
    </div>
      
    )
}