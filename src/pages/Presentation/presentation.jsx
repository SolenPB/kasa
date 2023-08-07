import Slideshow from '../../components/Slideshow/slideshow';

function Presentation() {    
    const data = require('../../datas/destination.json');
    const coupure = data.slice(0,6);
    console.log(coupure)
    return(
        <div className='description'>
               {data.map((data) => { 
                 return <Slideshow picture={data.cover} title={data.title} />
               })}
        </div>
    )
}

export default Presentation