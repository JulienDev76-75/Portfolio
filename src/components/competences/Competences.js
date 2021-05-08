import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function Competences() {
    return (
    <section className="bg-primary">
     <h2 className="text-center text-white pb-2 pt-4">Mes compétences</h2>
        <div className="row row-cols-1 row-cols-md-2 g-4 ms-2 me-2 mt-2">
            <div className="col mb-3 pb-3">
                <div className="card">
                <div className="card-body text-center">
                    <h4 className="card-title"><FontAwesomeIcon icon={faCoffee} />&nbsp;&nbsp;Mes compétences techniques</h4>
                    <h3 className="pt-3"><span className="badge bg-secondary">HTML</span>&nbsp;&nbsp;<span className="badge bg-secondary">CSS</span>&nbsp;&nbsp;<span className="badge bg-secondary">JAVASCRIPT</span></h3>
                    <h3><span className="badge bg-secondary">PHP</span>&nbsp;&nbsp;<span className="badge bg-secondary">SQL</span></h3>
                    <h4 className="pt-4"><i class="fab fa-affiliatetheme"></i>Mes FrameWorks</h4>
                    <h3 className="pt-3"><span className="badge bg-secondary">React.Js</span>&nbsp;&nbsp;<span className="badge bg-secondary">Symfony</span>&nbsp;&nbsp;<span className="badge bg-secondary">MySQL</span></h3>
                    <h4 className="pt-4">Mes Visuels</h4>
                    <h3 className="pt-3"><span className="badge bg-secondary">Canva</span>&nbsp;&nbsp;<span className="badge bg-secondary">Symfony</span>&nbsp;&nbsp;<span className="badge bg-secondary">MySQL</span></h3>
                    <h4 className="pt-4">Sans oublier</h4>
                    <h3 className="pt-3"><span className="badge bg-secondary">GitHub</span>&nbsp;&nbsp;<span className="badge bg-secondary">Wordpress</span>&nbsp;&nbsp;<span className="badge bg-secondary">Google Analytics</span></h3>
                </div>
                </div>
            </div>
            <div className="col mb-3 pb-3">
                 <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Mes compétences techniques</h5>
                    <h3><span className="badge bg-secondary">HTML</span>&nbsp;&nbsp;<span className="badge bg-secondary">CSS</span>&nbsp;&nbsp;<span className="badge bg-secondary">JAVASCRIPT</span></h3>
                    <h3><span className="badge bg-secondary">HTML</span>&nbsp;&nbsp;<span className="badge bg-secondary">CSS</span>&nbsp;&nbsp;<span className="badge bg-secondary">JAVASCRIPT</span></h3>
                    <h3><span className="badge bg-secondary">HTML</span>&nbsp;&nbsp;<span className="badge bg-secondary">CSS</span>&nbsp;&nbsp;<span className="badge bg-secondary">JAVASCRIPT</span></h3>
                    <h5 className="mt-4">Mes FrameWorks</h5>
                    <h3><span className="badge bg-secondary">HTML</span>&nbsp;&nbsp;<span className="badge bg-secondary">CSS</span>&nbsp;&nbsp;<span className="badge bg-secondary">JAVASCRIPT</span></h3>
                    <h3><span className="badge bg-secondary">HTML</span>&nbsp;&nbsp;<span className="badge bg-secondary">CSS</span>&nbsp;&nbsp;<span className="badge bg-secondary">JAVASCRIPT</span></h3>
                </div>
                </div>
            </div>
        </div>

    </section>
    );
}

export default Competences;

