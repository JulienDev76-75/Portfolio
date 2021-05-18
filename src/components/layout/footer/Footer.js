//<img src={process.env.PUBLIC_URL + "/GitHub-Mark.png"} alt="lien_GitHub"/> is the way to LOAD images from public file (not src file) on the site
//mail-to is html method to send a mail box to user in the goal to contact you
function Footer(){
    return(
    <footer id="footer" className="text-center text-white text-lg-start">
        <h2 className="text-center pb-2 pt-5 w-75 mx-auto">Pour me contacter :<hr className="hr w-100"></hr></h2>
        <div className="container_footer w-75 mx-auto p-4 pt-5">
            <div className="row">
                <div className="col-lg-6 col-md-12 mb-4 mb-md-0 pb-4">
                    <h5 className="text-uppercase pb-2">Pour finir :</h5>
                    <p>Dans le cadre de ma formation à l'Afpa de Rouen, je suis à la recherche
                    d'un stage non rémunéré pour 9 semaines à partir du 16 août 2021.
                    Si mon profil vous intéresse, vous pouvez directement me contacter
                    en cliquant sur le lien<br /> ci-joint : <a className="mailto" href="mailto:julien.coart@gmail.com">julien.coart@gmail.com.</a>
                    </p>
                </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5>Linkedin</h5>
                <ul className="list-unstyled mb-5">
                    <li>
                        <a href="https://www.linkedin.com/in/julien-coart-86142a147/" target="_blank" rel=" noreferrer noopener">
                        <img className="logofooter" src={process.env.PUBLIC_URL + "/linkedinlogo.png"} alt="lien_linkedin"/>
                        </a> 
                    </li>
                </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5>GitHub</h5>
                <ul className="list-unstyled">
                    <li>
                        <a href="https://github.com/JulienDev76-75" target="_blank" rel=" noreferrer noopener">
                        <img className="logofooter" src={process.env.PUBLIC_URL + "/github.png"} alt="lien_GitHub"/>
                        </a> 
                    </li>
                </ul>
            </div>
            </div>           
        </div>
        <div className="copyright text-center mt-5">© 2021 Copyright: Julien Coart. 
        </div>
    </footer>
    );
}

export default Footer;