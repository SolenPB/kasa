import Up from "../../assets/chevron-up-down";
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
                    <button className="list-button__action-button__active" onClick={() => ClosedReliability()}><Up /></button>
                </div>
            <div className="list__list-description">
                <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
                régulièrement vérifiées par nos équipes.</p>
            </div>
            </div>

        ) : (
            <div className="menu">
                <div className='list-button'>
                    <h2 className="list-button__list-title">Fiabilité</h2>
                    <button className="list-button__action-button__inactive" onClick={() => OpenReliability()}><Up /></button>
                </div>
            </div>
        )}
        
    {/*Condition d'ouverture et de fermeture du bouton "Respect */}

        {isOpenRespect ? (
            <div className="menu">
                <div className="list-button">
                    <h2 className="list-button__list-title">Respect</h2>
                    <button className="list-button__action-button__active" onClick={() => ClosedRespect()}><Up /></button>
                </div>   
                <p className="list__list-description">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </div>

        ) : (
            <div className="menu">
                <div className='list-button'>
                    <h2 className="list-button__list-title">Respect</h2>
                    <button className="list-button__action-button__inactive" onClick={() => OpenRespect()}><Up /></button>
                </div>
            </div>
        )}

    {/*Condition d'ouverture et de fermeture du bouton "Service"*/}

        {isOpenService ? (
            <div className="menu">
                <div className="list-button">
                    <h2 className="list-button__list-title">Service</h2>
                    <button className="list-button__action-button__active" onClick={() => ClosedService()}><Up /></button>
                </div>
                <p className="list__list-description">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </div>
        ) : (
            <div className="menu">
                <div className='list-button'>
                    <h2 className="list-button__list-title">Service</h2>
                    <button className="list-button__action-button__inactive" onClick={() => OpenService()} ><Up /></button>
                </div>
            </div>
        )}

    {/*Condition d'ouverture et de fermeture du bouton "Sécurité" */}

        {isOpenSecurity ? (
            <div className="menu">
                <div className="list-button">
                    <h2 className="list-button__list-title">Sécurité</h2>
                    <button className="list-button__action-button__active" onClick={() => ClosedSecurity()}><Up /></button>
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
                    <button className="list-button__action-button__inactive" onClick={() => OpenSecurity()}><Up /></button>
                </div>
            </div>
        )}
        </div>

    )
}

export default Collapse