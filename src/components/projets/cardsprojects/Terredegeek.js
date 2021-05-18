// I import the image of the card
import img from './terredegeek.jpg'
// I import the JSON file that corresponds to this project and I complete it with the information from the file
import Data from './terredegeek.json'

function Terredegeek () {
    return (
        <div className="scale-in-ver-center col-12 col-sm-12 col-md-12 col-lg-4 py-3 bg-transparent">
            {Data.map((post) => {
                return (
                    <div>
                        <div className="card py-3 bg-secondary">
                            <div className="d-flex flex-column justify-content-between">
                                <div className="imgcard d-flex justify-content-center">
                                    <img src={img} className="card-img-top" alt="terredegeek"/>
                                </div>
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title text-center text-white text-decoration-underline">{post.titre}</h5>
                                    <p className="text-white">{post.contenu}</p>
                                    <button type="button" class="btn btn-dark"><a className="voirleprojet" href={post.link} target="_blank" rel="noreferrer noopener">
                                        Voir le projet</a>
                                    </button>
                                </div>
                            </div>
                        </div>  
                    </div>
                );
            })}
        </div>
    );
}

export default Terredegeek;