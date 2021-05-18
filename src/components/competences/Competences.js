//Import icons from web site font-awesome, the  trick is to take for example a fa-rocket and turn it into faRocket
//All icons are not supported, the list is limited
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs } from '@fortawesome/free-solid-svg-icons'
import { faPaintBrush } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faPencilRuler } from '@fortawesome/free-solid-svg-icons'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { faTools } from '@fortawesome/free-solid-svg-icons'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { faFutbol } from '@fortawesome/free-solid-svg-icons'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faHandSpock } from '@fortawesome/free-solid-svg-icons'
import { faUserFriends} from '@fortawesome/free-solid-svg-icons'
import { faQuestion} from '@fortawesome/free-solid-svg-icons'
import { faSmile} from '@fortawesome/free-solid-svg-icons'

//To put icons into, just use then <FontAwesomeIcon icon={fa(*iconsname*)} />
//&nbsp; code to put a space in HTML
function Competences() {
    return (
    <section id="section" className="bg-primary">
     <div className="row text-center w-75 mx-auto">
     <h2 className="text-center text-white pb-2 pt-4 pt-5">Mes Compétences</h2><hr className="hr w-100"></hr>
     </div>
        <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-4 ms-2 me-2 mt-2">
            <div className="cardopacity_1 col mb-3 pb-3 mt-5">
                <div className="card w-75 mx-auto">
                <div className="card-body text-center">
                    <h4 className="card-title"><FontAwesomeIcon icon={faCogs} />&nbsp;&nbsp;Mes compétences techniques</h4>
                    <h3 className="pt-3"><span className="badge bg-secondary">HTML</span>&nbsp;&nbsp;<span className="badge bg-secondary">CSS</span>&nbsp;&nbsp;<span className="badge bg-secondary">JAVASCRIPT</span></h3>
                    <h3><span className="badge bg-secondary">PHP</span>&nbsp;&nbsp;<span className="badge bg-secondary">SQL</span></h3>
                    <h4 className="pt-4"><FontAwesomeIcon icon={faTools} />&nbsp;&nbsp;Mes FrameWorks</h4>
                    <h3 className="pt-3"><span className="badge bg-secondary">React.Js</span>&nbsp;&nbsp;<span className="badge bg-secondary">Symfony</span>&nbsp;&nbsp;<span className="badge bg-secondary">MySQL</span></h3>
                    <h4 className="pt-4"><FontAwesomeIcon icon={faPaintBrush} />&nbsp;&nbsp;Mes Visuels</h4>
                    <h3 className="pt-3"><span className="badge bg-secondary">Canva</span>&nbsp;&nbsp;<span className="badge bg-secondary">Illustrator</span>&nbsp;&nbsp;<span className="badge bg-secondary">Photoshop</span></h3>
                    <h4 className="pt-4"><FontAwesomeIcon icon={faLightbulb} />&nbsp;&nbsp;Mes plus</h4>
                    <h3 className="pt-3"><span className="badge bg-secondary">GitHub</span>&nbsp;&nbsp;<span className="badge bg-secondary">Wordpress</span>&nbsp;&nbsp;<span className="badge bg-secondary">Google Analytics</span></h3>
                </div>
                </div>
            </div>
            <div className="cardopacity_2 col mb-3 pb-3 mt-5">
                 <div className="card w-75 mx-auto">
                 <div className="card-body text-center">
                    <h4 className="card-title pb-2"><FontAwesomeIcon icon={faPencilRuler} />&nbsp;&nbsp;Mes hobbies</h4>
                    <ul>
                        <h4>Science Fiction&nbsp;<FontAwesomeIcon icon={faRocket} /></h4>
                        <h4>Sport&nbsp;<FontAwesomeIcon icon={faFutbol} /></h4>
                        <h4>Jeux vidéo&nbsp;<FontAwesomeIcon icon={faGamepad} /></h4>
                        <h4>Astronomie&nbsp;<FontAwesomeIcon icon={faStar} /></h4>
                        <h4>Voyage&nbsp;<FontAwesomeIcon icon={faPlaneDeparture} /></h4>
                    </ul>
                    <h4 className="mt-5 pb-2"><FontAwesomeIcon icon={faPowerOff} />&nbsp;&nbsp;Mes Softs Skills</h4>
                    <ul>
                        <h4>Cultivé&nbsp;<FontAwesomeIcon icon={faBook} /></h4>
                        <h4>Polyvalent&nbsp;<FontAwesomeIcon icon={faHandSpock} /></h4>
                        <h4>Travail en équipe&nbsp;<FontAwesomeIcon icon={faUserFriends} /></h4>
                        <h4>Curieux&nbsp;<FontAwesomeIcon icon={faQuestion} /></h4>
                        <h4>Avenant&nbsp;<FontAwesomeIcon icon={faSmile} /></h4>
                    </ul>
                </div>
                </div>
            </div>
        </div>
        <p id="text-comp" className="text-focus-in text-center text-white pt-5">"Rappelez-vous de regarder les étoiles et non pas vos pieds."</p>
        <p id="text-comp1" className="text-focus-in text-center text-white pb-5">Stephen Hawking</p>

    </section>
    );
}

export default Competences;

