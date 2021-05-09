
function Header() {

    return (
    <div>
        <header id="header" className="text-center text-white">
            <div id="nav">
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active text-white" aria-current="page" href="#header">A propos</a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link text-white" href="#mesprojets">Projets</a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link text-white" href="#section">Compétences</a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link text-white" href="#footer">Contact</a>
                    </li>
                </ul>
            </div>

            <div className="container pt-5">
                <div className="aboutme pt-4 mt-4 pb-4 mb-4">
                <h1 className="text-white">Je suis<br/>Julien Coart</h1>
                <p className="lead text-white p-2">Développeur Web Front-end et Back-end présent partout dans le monde</p>
                <p className="lead text-white">Je m'appelle Julien, j'ai 33 ans, je suis en pleine reconversion dans le fabuleux métier du développement web,
                <br/>Je souhaite de tout coeur avoir ma certif', je suis sûrement le seul à être content de faire partie de l'AFPA de Rouen.
                <br/>Je ne promets pas d'être le meilleur développeur du monde, mais je pense que je peux quand même apporter.
                <br/>Je suis passionné d'astronomie, de jeu d'échec, et je promets de ne pas avoir trop la tête dans la lune, d'être terre-à-terre.
                <br/>Je recherche un stage dans la région de Normandie ou de Paris, ce stage sera non rémunéré et il sera à partir du 16 août.</p>
            </div>
            </div>
            <button type="button" className="btn text-dark mt-5" data-bs-toggle="button" autocomplete="off">
            <a className="btn btn-light" target="_blank" href="./CVJuliendeveloppeur_compressed.pdf" download>Cliquez ici pour obtenir mon CV</a></button>
        </header>
    </div>
    );
}


export default Header;