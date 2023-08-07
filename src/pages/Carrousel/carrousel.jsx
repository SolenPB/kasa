import Card from '../../components/Card/card';

function Carrousel() {
    let data = require('../../datas/destination.json');
    data = data.slice(0,1);
    console.log(data);

    return(
        <div className='description'>
            {data.map((data, index) => {
             return <div className="">
                key={index} title={data.title} picture={data.cover}
             </div> 
           })}
        </div>
    )
}

export default Carrousel