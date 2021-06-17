// I import the image of the card
import img from './memory.png'
// I import the JSON file that corresponds to this project and I complete it with the information from the file
import Data from './memory.json'

function Memory () {
    return (
        <div className="col-12 col-sm-12 col-md-12 col-lg-4 py-3 bg-transparent">
            {Data.map((post) => {
                return (
                    <div>
                        <div className="card py-3 bg-transparent">
                            <div className="d-flex flex-column justify-content-between">
                                <div className="imgcard d-flex justify-content-center">
                                    <img src={img} className="card-img-top" alt="memory"/>
                                </div>
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title text-white text-center text-decoration-underline">{post.titre}</h5>
                                    <p className="text-white">{post.contenu}</p>
                                    <button type="button" class="btn btn-dark"><a className="voirleprojet" href={post.link} target="_blank" rel=" noreferrer noopener">
                                        Voir le projet</a></button>
                                </div>
                            </div>
                        </div>  
                        {/* <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">{post.titre}</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                    <p>du contenu</p>
                                    </div>
                                    <div className="modal-footer">
                                        <h3>Description</h3>
                                        <p>{post.contenu}</p>
                                    </div>
                                </div>
                            </div>
                        </div>  */}
                    </div>
                );
            })}
        </div>
    );
}

export default Memory;