import Up from "../../assets/chevron-up-down";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Collapse(props){
    const[isOpenDrop, setIsOpenDrop] = useState(false);
//Fonction pour les ouvertures 
    function OpenDrop(){
        setIsOpenDrop(true);
    }
//Fonction pour les fermetures 
    function ClosedDrop(){
        setIsOpenDrop(false);
    }

    useEffect(() => {
        OpenDrop();
        ClosedDrop();
    }, [])

    const pages = useParams();
    const style = pages.id ? (
        {divParent : "slide__details",
        divEnfant : "slide__details__dropdown",
        divEnfant1 : "slide__details__dropdown__title",
        divEnfant2 : "slide__details__dropdown__text"}
    ) : (
        {divParent : "about-menu",
        divEnfant : "about-menu__dropdown",
        divEnfant1 : "about-menu__dropdown__title",
        divEnfant2 : "about-menu__dropdown__text"}
    )
    return(
        <div className={style.divParent}>
        {isOpenDrop ? (
            <div className={style.divEnfant}>
                <div className={style.divEnfant1}>
                    <h2>{props.title}</h2>
                    <button className="list-button__action-button__active" onClick={() => ClosedDrop()}><Up /></button>
                </div>
                <div className={style.divEnfant2}>
                    <p>{props.description}</p>
                </div>
            </div>

        ) : (
            <div className={style.divEnfant}>
                <div className={style.divEnfant1}>
                    <h2>{props.title}</h2>
                    <button className="list-button__action-button__inactive" onClick={() => OpenDrop()}><Up /></button>
                </div>
            </div>
        )}
        </div>
 )       
}


export default Collapse