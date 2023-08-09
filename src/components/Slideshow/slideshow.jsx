import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Slideshow() {
    
    const data = require('../../datas/destination.json');
    const newData = data.slice(0,6);
    console.log(newData)
    console.log(newData.id)
    return(
    <>
        <Carousel>
                {newData.map((newData) => { 
                return(
                 <div key={newData.id}>
                   <img src={newData.cover} alt="" />
                   <div className="title">{newData.title}</div>
                 </div>
                )})}
        </Carousel>
        
    </>

    )
    
}

export default Slideshow