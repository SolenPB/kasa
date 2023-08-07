import Slideshow from '../../components/Slideshow/slideshow';

function Presentation() {    
    const data = require('../../datas/destination.json');
    const coupure = data.slice(0,6);
    console.log(coupure)
    return(
        <div className='description'>
               {coupure.map((coupure, id) => { 
                 return <Slideshow key={id} picture={coupure.cover} title={coupure.title} host={coupure.host}/>
               })}
        </div>
    )
}

export default Presentation