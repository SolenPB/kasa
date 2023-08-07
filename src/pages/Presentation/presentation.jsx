import Slideshow from '../../components/Slideshow/slideshow';

function Presentation() {    
    const data = require('../../datas/destination.json');
    const newData = data.slice(0,6);
    console.log(newData)
    return(
        <div className='description'>
               {newData.map((newData, id) => { 
                 return <Slideshow key={id} picture={newData.cover} title={newData.title} host={newData.host} location={newData.location} 
                 tags={newData.tags} rating={newData.rating} description={newData.description} equipments={newData.equipments} />
               })}
        </div>
    )
}

export default Presentation