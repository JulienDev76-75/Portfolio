
// ::after, ::before {
//     box-sizing: border-box;
// }

function Footer(){
    return(
    <footer id="footer" className="text-center text-white text-lg-start">
        <div className="container p-4">
            <div className="row">

                <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                    <h5 className="text-uppercase">petit mot de fin de footer</h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                    molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
                    voluptatem veniam, est atque cumque eum delectus sint!
                    </p>
                </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-lowercase">Linkedin</h5>
                <ul className="list-unstyled mb-0">
                    <li>
                        <a href="https://www.linkedin.com/in/julien-coart-86142a147/" target="_blank" rel=" noreferrer noopener">
                        <img src={process.env.PUBLIC_URL + "/linkedin.jpg"} alt="lien_linkedin"/>
                        </a> 
                    </li>
                </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-lowercase mb-0">GitHub</h5>
                <ul className="list-unstyled">
                    <li>
                        <a href="https://github.com/JulienDev76-75" target="_blank" rel=" noreferrer noopener">
                        <img src={process.env.PUBLIC_URL + "/GitHub-Mark.png"} alt="lien_GitHub"/>
                        </a> 
                    </li>
                </ul>
            </div>
            </div>
        </div>

        <div className="text-center p-3">© 2021 Copyright: Julien Coart. 
        </div>

    </footer>
    );
}

export default Footer;