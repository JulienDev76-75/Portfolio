import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
// import Typed from 'react-typed';

function Header() {

    return (
    <div>
        <header id="header" className="text-center text-white">
            <div id="nav">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link active text-white" aria-current="page" href="#header">A propos&nbsp;<FontAwesomeIcon icon={faRocket} /></a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link text-white" href="#mesprojets">Projets&nbsp;<FontAwesomeIcon icon={faProjectDiagram} /></a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link text-white" href="#section">Compétences&nbsp;<FontAwesomeIcon icon={faCogs} /></a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link text-white" href="#footer">Contact&nbsp;<FontAwesomeIcon icon={faIdCard} /></a>
                    </li>
                </ul>
            </div>

            <div className="container pt-5">
                <div className="aboutme pt-5 mt-5 pb-3 mb-3">
                    <h1 className="julien_coart text-center">Julien Coart</h1>
                    {/* <Typed
                    className="typed-text"
                    strings={["Développeur Front-end", "Développeur Back-End", "開発者", "French Developper"]}>
                    </Typed> */}
                    <h2 className=" text-white p-2">Développeur Web Front-end et Back-end</h2>
                    <p className="lead text-white p-4">Je m'appelle Julien, j'ai 33 ans, je suis en pleine reconversion dans le fabuleux métier du développement web.
                    <br/>Après mes études en Histoire et Sciences Politique, l'opportunité d'être chef d'entreprise en tenant mon propre restaurant s'est offerte à moi,
                    <br/>après cette aventure forte enrichissante, j'ai testé divers jobs où je ne me reconnaissais pas. Après un travail en auto-didacte,
                    <br/>je me suis préparé afin de suivre activement une formation dans le développement Web ! Passionné depuis toujours pour le monde digital que cela soit les réseaux sociaux, les jeux vidéo sont le moteur de ma reconversion. J'espère pouvoir à terme plus tard me lancer dans la création d'un jeu vidéo !
                    <br/>Passionné d'astronomie également, avoir la tête dans les étoiles ne m'empêche pas d'être terre à terre ! Motivé, déterminé et avec l'envie de s'épanouir enfin dans un travail que j'aime, je suis disponible pour toute demande de renseignements ! Je suis à la recherche d'un stage non rémunéré de 9 semaines à partir du 16 août, n'hésitez pas à venir me contacter !</p>  
                </div>
            </div>

            <button type="button" className="btn text-dark mt-2 mb-4" data-bs-toggle="button" autocomplete="off">
            <a className="btn btn-light" target="_blank" href={process.env.PUBLIC_URL + "/CVJuliendeveloppeur_compressed.pdf"} download>Obtenir mon CV</a></button>
        </header>
    </div>
    );
}


export default Header;