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
        {divParent : "dropdownMenu",
        divEnfant : "dropdownMenu__title",
        divEnfant1 : "dropdownMenu__text",
        }
    ) : (
        {divParent : "about-menu",
        divEnfant : "about-menu__dropdown__title",
        divEnfant1 : "about-menu__dropdown__text",
        }
    )
    return(
        <div>
        {isOpenDrop ? (
            <div className={style.divParent}>
                <div className={style.divEnfant}>
                    <h2>{props.title}</h2>
                    <button className="list-button__action-button__active" onClick={() => ClosedDrop()}><Up /></button>
                </div>
                <div className={style.divEnfant1}>
                    <span>{props.description}</span>
                </div>
            </div>

        ) : (
            <div className={style.divParent}>
                <div className={style.divEnfant}>
                    <h2>{props.title}</h2>
                    <button className="list-button__action-button__inactive" onClick={() => OpenDrop()}><Up /></button>
                </div>
            </div>
        )}
        </div>
 )       
}


export default Collapse