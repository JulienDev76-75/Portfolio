// I import the image of the card
import img from './hangman.jpg';
// I import the JSON file that corresponds to this project and I complete it with the information from the file
import Data from './hangman.json';

function Hangman () {
    return (
        <div className="col-12 col-sm-12 col-md-12 col-lg-4 py-3 bg-transparent">
            {Data.map((post) => {
                return (
                    <div>
                        <div className="card py-3 bg-transparent">
                            <div className="d-flex flex-column justify-content-between">
                                <div className="imgcard d-flex justify-content-center">
                                    <img src={img} className="card-img-top" alt="terredegeek"/>
                                </div>
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title text-center text-white text-decoration-underline">{post.titre}</h5>
                                    <p className="text-white">{post.contenu}</p>
                                    <button type="button" className="btnprojet btn btn-dark text-white" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Voir le projet
                                    </button>
                                </div>
                            </div>
                        </div>  
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">{post.titre}</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-lg-6 modal-left"></div>
                                            <div className="col-lg-6 modal-right"></div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <h3>Description</h3>
                                        <p>{post.contenu}</p>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                );
            })}
        </div>
    );
}

export default Hangman;