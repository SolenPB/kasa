import img1 from '../../assets/img1.png'
import Card from "../../components/Card/card";
import { Link } from "react-router-dom";

function Home() {
  function Destination() { 
    let data = require('../../datas/destination.json');
    let element = data.slice(0,6);

return(<>
    <div className="gallery">
           {element.map((data, index) => {
             return( 
              <Link key={index} className="gallery__navCard" to={data.id} >
                <Card title={data.title} picture={data.cover} />
              </Link>
             )
           })}
    </div>
    </>
    
)
}
    return (<div>
    <div className='titleGallery'>      
        <img className="titleGallery__sea"src={img1} alt="Vue sur la mer"/>     
        <p className='titleGallery__titleSea'>
          Chez vous, partout et ailleurs
        </p>
    </div>
    <Destination/>
    </div>
    )
  }


export default Home