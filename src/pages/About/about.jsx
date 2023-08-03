import img2 from '../../assets/img2.png'
function About() {
    return(
        <>
            <div className="about-title">
                <img src={img2} alt='Vue sur une chaîne de montagne et sa vallée' className='about-title__about-picture'/>
            </div>
            <div className='about-menu'>
                <select name='description' className='option-menu'>
                    <option value="fiabilité" selected>Fiabilité</option>
                    <option>
                        Les annonces postées sur Kasa garantissent une fiabilité totale.
                        Les photos sont conformes aux logements, et toutes les informations
                        sont régulièrement vérifiées par nos équipes.    
                    </option> 
                </select>
                <select name='description' className='option-menu'>
                    <option value="respect">Respect</option>
                    <option>
                        La bienveillance fait partie des valeurs fondatrices de Kasa.
                        Tout comportement discriminatoire ou de perturbation
                        du voisinage entraînera une exclusion de la plateforme.
                    </option>
                </select>
                <select name='description' className='option-menu'>
                    <option value="service">Service</option>
                    <option>
                        La bienveillance fait partie des valeurs fondatrices de Kasa.
                        Tout comportement discriminatoire ou de perturbation
                        du voisinage entraînera une exclusion de la plateforme.
                    </option>
                </select>
                <select name='description' className='option-menu'>
                    <option value="sécurité">Sécurité</option>
                    <option>
                        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,
                        chaque logement correspond aux critères de sécurité établis par nos services.
                        En laissant une note aussi bien à l'hôte qu'au locataire, cela permet de vérifier
                        que les standards sont bien respectés. Nous organisons également des ateliers 
                        sur la sécurité domestique pour nos hôtes.
                    </option>
                </select>
            </div>
        </>
    )
}

export default About