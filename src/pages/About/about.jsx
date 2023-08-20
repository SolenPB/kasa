import img2 from '../../assets/img2.png'
import Collapse from '../../components/Collapse/collapse';

function About() {
    const reliability = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes"
    const respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    const service = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    const security = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    return(
        <div className='about'>
            <div className="about-title">
                <img src={img2} alt='Vue sur une chaîne de montagne et sa vallée' className='about-title__about-picture'/>
            </div>
                <Collapse title="Fiabilité" description={reliability}/>
                <Collapse title="Respect" description={respect} />
                <Collapse title="Service" description={service} />
                <Collapse title="Sécurité" description={security} />
        </div>         
)
}
export default About;