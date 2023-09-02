import Up from "../../assets/chevron-up-down";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Collapse(props){
    const[isOpenDrop, setIsOpenDrop] = useState(false);
    const[isLoaded, setIsLoaded] = useState(true);
//Fonction pour les ouvertures 
    function OpenDrop(){
        setIsOpenDrop(true);
        setIsLoaded(false);
    }
//Fonction pour les fermetures 
    function ClosedDrop(){
        setIsOpenDrop(false);
        setIsLoaded(false);
    }

    const pages = useParams();

    let style = "";

    if(isLoaded){
         style = pages.id ? (
            {divParent : "info",
            divEnfant : "info__dropdown__title",
            divEnfant1 : "info__dropdown__text animation__down",
            divEnfant2: "info__dropdown__text hiddenText",
            }
        ) : (
            {divParent : "aboutMenu",
            divEnfant : "aboutMenu__dropdown__title",
            divEnfant1 : "aboutMenu__dropdown__text animation__down",
            divEnfant2: "aboutMenu__dropdown__text hiddenText",
            }
        )
    } else {
        style = pages.id ? (
            {divParent : "info",
            divEnfant : "info__dropdown__title",
            divEnfant1 : "info__dropdown__text animation__down",
            divEnfant2: "info__dropdown__text animation__up",
            }
        ) : (
            {divParent : "aboutMenu",
            divEnfant : "aboutMenu__dropdown__title",
            divEnfant1 : "aboutMenu__dropdown__text animation__down",
            divEnfant2: "aboutMenu__dropdown__text animation__up",
            }
        )
    }
    
    return(
        <>
        {isOpenDrop ? (
            <div className={style.divParent}>
                <div className={`${style.divEnfant} titleOpened`}>
                    <h2>{props.title}</h2>
                    <button className="listButton__actionButton__active" onClick={() => ClosedDrop()}><Up /></button>
                </div>
                <div className={style.divEnfant1}>
                    <span>{props.description}</span>
                </div>
            </div>

        ) : (
            <div className={style.divParent}>
                <div className={style.divEnfant}>
                    <h2>{props.title}</h2>
                    <button className="listButton__actionButton__inactive" onClick={() => OpenDrop()}><Up /></button>
                </div>
                <div className={style.divEnfant2}>
                    <span>{props.description}</span>
                </div>
            </div>
        )}
        </>
 )       
}


export default Collapse
