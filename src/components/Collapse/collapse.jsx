import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect } from "react"

function Collapse(){
    const[isOpenReliability, setIsOpenReliability] = useState(false);
    const[isOpenRespect, setIsOpenRespect] = useState(false);
    const[isOpenService, setIsOpenService] = useState(false);
    const[isOpenSecurity, setIsOpenSecurity] = useState(false);

//Fonctions pour les ouvertures 

    function OpenReliability(){
        setIsOpenReliability(true);
    }
    function OpenRespect(){
        setIsOpenRespect(true);
    }
    function OpenService(){
        setIsOpenService(true);
    }
    function OpenSecurity(){
        setIsOpenSecurity(true);
    }

//Fonctions pour les fermetures 

    function ClosedReliability(){
        setIsOpenReliability(false);
    }
    function ClosedRespect(){
        setIsOpenRespect(false);
    }
    function ClosedService(){
        setIsOpenService(false);
    }
    function ClosedSecurity(){
        setIsOpenSecurity(false)
    }

    useEffect(() => {
        OpenReliability();
        ClosedReliability();
        OpenRespect();
        ClosedRespect();
        OpenService();
        ClosedService();
        OpenSecurity();
        ClosedSecurity();
    }, [])

    return(

    //Condition d'ouverture et de fermeture du bouton "Fiabilité"

        <div className="list">
        {isOpenReliability ? (
            <div className="menu">
                <div className='list-button'>
                    <h2 className="list-button__list-title">Fiabilité</h2>
                    <button className="list-button__action-button" onClick={() => ClosedReliability()}><FontAwesomeIcon icon={faChevronUp} /></button>
                </div>
                <p className="list__list-description">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
                régulièrement vérifiées par nos équipes.</p>
            </div>

        ) : (
            <div className="menu">
                <div className='list-button'>
                    <h2 className="list-button__list-title">Fiabilité</h2>
                    <button className="list-button__action-button" onClick={() => OpenReliability()}><FontAwesomeIcon icon={faChevronUp} /></button>
                </div>
            </div>
        )}
        
    {/*Condition d'ouverture et de fermeture du bouton "Respect */}

        {isOpenRespect ? (
            <div className="menu">
                <div className="list-button">
                    <h2 className="list-button__list-title">Respect</h2>
                    <button className="list-button__action-button" onClick={() => ClosedRespect()}><FontAwesomeIcon icon={faChevronUp} /></button>
                </div>   
                <p className="list__list-description">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </div>

        ) : (
            <div className="menu">
                <div className='list-button'>
                    <h2 className="list-button__list-title">Respect</h2>
                    <button className="list-button__action-button" onClick={() => OpenRespect()}><FontAwesomeIcon icon={faChevronUp} /></button>
                </div>
            </div>
        )}

    {/*Condition d'ouverture et de fermeture du bouton "Service"*/}

        {isOpenService ? (
            <div className="menu">
                <div className="list-button">
                    <h2 className="list-button__list-title">Service</h2>
                    <button className="list-button__action-button" onClick={() => ClosedService()}><FontAwesomeIcon icon={faChevronUp} /></button>
                </div>
                <p className="list__list-description">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </div>
        ) : (
            <div className="menu">
                <div className='list-button'>
                    <h2 className="list-button__list-title">Service</h2>
                    <button className="list-button__action-button" onClick={() => OpenService()}><FontAwesomeIcon icon={faChevronUp} /></button>
                </div>
            </div>
        )}

    {/*Condition d'ouverture et de fermeture du bouton "Sécurité" */}

        {isOpenSecurity ? (
            <div className="menu">
                <div className="list-button">
                    <h2 className="list-button__list-title">Sécurité</h2>
                    <button className="list-button__action-button" onClick={() => ClosedSecurity()}><FontAwesomeIcon icon={faChevronUp} /></button>
                </div>
                <p className="list__list-description">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
                correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
                locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
                également des ateliers sur la sécurité domestique pour nos hôtes.</p>
            </div>
        ) : (
            <div className="menu">
                <div className='list-button'>
                    <h2 className="list-button__list-title">Sécurité</h2>
                    <button className="list-button__action-button" onClick={() => OpenSecurity()}><FontAwesomeIcon icon={faChevronUp} /></button>
                </div>
            </div>
        )}
        </div>

    )
}

export default Collapse