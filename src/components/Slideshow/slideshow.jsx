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
        console.log(dataFiltered);
      }
    }
    return(
    <>
        <Carousel>
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
              </div>
        
        
    </>

    )
    
}

export default Slideshow