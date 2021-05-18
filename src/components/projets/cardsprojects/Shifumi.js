// I import the image of the card
import img from './shifumi-logo.jpg';
import Data from './shifumi.json';

function Shifoumi () {
    return (
        <div className="scale-in-ver-center col-12 col-sm-12 col-md-12 col-lg-4 py-3 bg-transparent">
            {Data.map((post) => {
                return (
                    <div>
                        <div className="card py-3 bg-secondary">
                            <div className="d-flex flex-column justify-content-between">
                                <div className="imgcard d-flex justify-content-center">
                                    <img src={img} className="card-img-top" alt="shifumi"/>
                                </div>
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title text-white text-center text-decoration-underline">{post.titre}</h5>
                                    <p className="text-white">{post.contenu}</p>
                                    <button type="button" className="btn btn-dark"><a className="voirleprojet" href={post.link} target="_blank" rel="noreferrer noopener">Voir le projet</a>
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

export default Shifoumi;