import Up from "../../assets/chevron-up-down";
import { useState, useEffect } from "react"

function Collapse(props){
    const[isOpenDrop, setIsOpenDrop] = useState(false);
//Fonctions pour les ouvertures 
    function OpenDrop(){
        setIsOpenDrop(true);
    }
//Fonctions pour les fermetures 
    function ClosedDrop(){
        setIsOpenDrop(false);
    }

    useEffect(() => {
        OpenDrop();
        ClosedDrop();
    }, [])

    return(
        <div className="about-list">
        {isOpenDrop ? (
            <div className="menu">
                <div className='list-button'>
                    <h2 className="list-button__list-title">{props.title}</h2>
                    <button className="list-button__action-button__active" onClick={() => ClosedDrop()}><Up /></button>
                </div>
            <div className="list__list-description">
                <p>{props.description}</p>
            </div>
            </div>

        ) : (
            <div className="menu">
                <div className='list-button'>
                    <h2 className="list-button__list-title">{props.title}</h2>
                    <button className="list-button__action-button__inactive" onClick={() => OpenDrop()}><Up /></button>
                </div>
            </div>
        )}
        </div>
 )       
}


export default Collapse