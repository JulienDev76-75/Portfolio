// // import Logo from './src.GitHub-Mark.png'
// // import logo from '../GitHub-Mark.png';

// function Footer() {
//     return(
//         <footer className="bg-secondary p-2 text-center text-white">
//             <div className="row">
//                 <div className="col-lg-12 mt-3">
//                 <h3 className="titleBorder">Mes réseaux en un clic</h3>
//                 </div>
//             </div>

       
//             <div className="col-lg-12 d-flex flex-row justify-content-center mx-auto w-30">
//                 <a href="https://www.linkedin.com/in/julien-coart-86142a147/" target="_blank" rel=" noreferrer noopener">
//                     <img src={process.env.PUBLIC_URL + "/linkedin.jpg"} alt="lien_linkedin"/>
//                 </a> 
//                 <a href="https://github.com/JulienDev76-75" target="_blank" rel=" noreferrer noopener">
//                     <img src={process.env.PUBLIC_URL + "/GitHub-Mark.png"} alt="lien_GitHub"/>
//                 </a> 
//             </div>
            
            

//             <div className="row">
//                 <div className="col-lg-12">
//                 <h3 className="titleBorder">Si vous voulez mes contacter :</h3>
//                 <p>vous pouvez m'envoyer directement un mail à l'adresse : julien.coart@gmail.com</p>
//                 </div>
//             </div>
           
//             <div>
//             <p>Site réalisé en mai 2021, Julien Coart</p>
//             </div>
//         </footer>
//     );
// }

// export default Footer;


// ::after, ::before {
//     box-sizing: border-box;
// }

{/* <h1 className="titleborder">Me contacter ::after</h1> */}

function Footer(){
    return(
    <footer className="bg-light text-center text-lg-start">
        <div className="container p-4">
            <div className="row">

                <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                    <h5 className="text-uppercase">Footer Content</h5>
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