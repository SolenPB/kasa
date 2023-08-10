import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useParams } from "react-router-dom";

function Slideshow() {
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
        <Carousel showThumbs={false}>
          
            {dataFiltered.pictures.map((data, index) => {
              return (<>
              <div className="slide-pictures">
                <img src={dataFiltered.pictures[index]} alt="" />
              </div>
              </>
              )
            })}       
        </Carousel>
          <div className="slide-title">
            <h2>{dataFiltered.title}</h2>
            <span>{dataFiltered.location} </span>
          </div>
          <div className="slide__tags">
            <span className="slide__tags__tagElement" >{dataFiltered.tags[0]}</span>
            <span className="slide__tags__tagElement">{dataFiltered.tags[1]}</span>
          </div>
          <div className="slide__rating">
            <span>{dataFiltered.rating}</span>
          </div> 
            <p>{dataFiltered.description}</p>
            <span>{dataFiltered.equipments}</span>        
    </div>

    )
    
}

export default Slideshow