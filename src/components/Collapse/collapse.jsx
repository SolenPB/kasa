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
        <div>
        {isOpenDrop ? (
            <div className="menu">
                <div className="menu__menu-description">
                    <h2 className="title-description">{props.title}</h2>
                    <button className="list-button__action-button__active" onClick={() => ClosedDrop()}><Up /></button>
                </div>
            <div className="list__list-description">
                <p>{props.description}</p>
            </div>
            </div>

        ) : (
            <div className="menu">
                <div className="menu__menu-description">
                    <h2>{props.title}</h2>
                    <button className="list-button__action-button__inactive" onClick={() => OpenDrop()}><Up /></button>
                </div>
            </div>
        )}
        </div>
 )       
}


export default Collapse