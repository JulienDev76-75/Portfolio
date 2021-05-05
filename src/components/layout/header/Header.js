
function Header() {

    return (
    <div>
        <header id="header" className="text-center text-white ">
            <div id="nav">
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">A propos</a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link" href="#">Projets</a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link" href="#">Compétences</a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>

            <div className="container pt-5">
                <div className="aboutme p-5">
                <h1 className="text-white"> Je suis <br/>Julien Coart</h1>
                <p className="lead text-white p-3">Développeur Web Front-end et Back-end présent partout dans le monde</p>
                </div>
                <p className="underlead text-white text-center pt-5">Je suis né un samedi ou un dimanche, ou peut être un lundi, mais le plus important, mais être né est ma meilleure réussite</p>
                <p className="underlead text-white text-center">Je suis né un samedi ou un dimanche, ou peut être un lundi, mais le plus important, mais être né est ma meilleure réussite</p>
                <p className="underlead text-white text-center">Je suis né un samedi ou un dimanche, ou peut être un lundi, mais le plus important, mais être né est ma meilleure réussite</p>
                <p className="underlead text-white text-center">Je suis né un samedi ou un dimanche, ou peut être un lundi, mais le plus important, mais être né est ma meilleure réussite</p>
            </div>
        </header>
    </div>
    );
}


export default Header;