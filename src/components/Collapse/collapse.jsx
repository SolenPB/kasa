import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect } from "react"

function Collapse(){
    const[isOpenReliability, setIsOpenReliability] = useState(false);
    const[isOpenRespect, setIsOpenRespect] = useState(false);
    const[isOpenService, setIsOpenService] = useState(false);
    const[isOpenSecurity, setIsOpenSecurity] = useState(false);

    return(
        <div className="list">
            <div className="list__list-menu">
                <div className="list-button ">
                    <h2 className="list-button__list-title">Fiabilité</h2>
                    <button className="list-button__action-button" onClick={() => setIsOpenReliability(true)}><FontAwesomeIcon icon={faChevronUp} /></button>
                </div>
                {isOpenReliability ? (                
                    <p className="list__list-description">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
                régulièrement vérifiées par nos équipes.</p>)
                : null}

            </div>

            <div className="list-menu">
                <div className="list-button">
                    <h2 className="list-button__list-title">Respect</h2>
                    <button className="list-button__action-button" onClick={ () => setIsOpenRespect(true)}><FontAwesomeIcon icon={faChevronUp} /></button>
                </div>
                {isOpenRespect ? (
                <p className="list__list-description">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                perturbation du voisinage entraînera une exclusion de notre plateforme.</p>)
                : null}
            </div>

            <div className="list-menu">
                <div className="list-button">
                    <h2 className="list-button__list-title">Service</h2>
                    <button className="list-button__action-button" onClick={ () => setIsOpenService(true)}><FontAwesomeIcon icon={faChevronUp} /></button>
                </div>
                {isOpenService ? (
                <p className="list__list-description">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                perturbation du voisinage entraînera une exclusion de notre plateforme.</p>)
                : null}
            </div>

            <div className="list-menu">
                <div className="list-button">
                    <h2 className="list-button__list-title">Sécurité</h2>
                    <button className="list-button__action-button" onClick={() => setIsOpenSecurity(true)}><FontAwesomeIcon icon={faChevronUp} /></button>
                </div>
                {isOpenSecurity ? (
                <p className="list__list-description">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
                correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
                locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
                également des ateliers sur la sécurité domestique pour nos hôtes.</p>)
                : null}
            </div>
        </div>
    )
}

export default Collapse