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
    return(
        <>
        {isOpenDrop ? (
            <div className={style.divParent}>
                <div className={`${style.divEnfant} titleOpened`}>
                    <h2>{props.title}</h2>
                    <button className="listButton__actionButton__active" onClick={() => ClosedDrop()}><Up /></button>
                </div>
                <div className={style.divEnfant1}>
                    <span className={style.divEnfant2}>{props.description}</span>
                </div>
            </div>

        ) : (
            <div className={style.divParent}>
                <div className={style.divEnfant}>
                    <h2>{props.title}</h2>
                    <button className="listButton__actionButton__inactive" onClick={() => OpenDrop()}><Up /></button>
                </div>
                <div className={style.divEnfant2}>
                    <span className={`${style.divEnfant2} hiddenText`}>{props.description}</span>
                </div>
            </div>
        )}
        </>
 )       
}


export default Collapse
