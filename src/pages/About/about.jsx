import img2 from '../../assets/img2.png'
import Collapse from '../../components/Collapse/collapse';

function About() {
    return(
        <>
            <div className="about-title">
                <img src={img2} alt='Vue sur une chaîne de montagne et sa vallée' className='about-title__about-picture'/>
            </div>
            <div className='about-list'>
                <Collapse />
            </div>
        </>         
)
}
export default About;