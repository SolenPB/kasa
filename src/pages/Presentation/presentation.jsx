import { useParams } from 'react-router-dom';

function Presentation() {    
    const {presentationProfil} = useParams();
    const elements = [];
    const data = require('../../datas/destination.json');

    data.map((data) => {
        if(data.id === presentationProfil ) {
            return elements.push(data)
        }

})
return(
    <div>
        <img src={data.cover} alt='logement' />
    </div>
    
)}

export default Presentation