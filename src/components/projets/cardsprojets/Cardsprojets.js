// // I import the image of the card
// import img from './';
// //i call the data.json file which is based on projetsFolder
// //i map it, it means for every id inside the data.json, it will create div elements
// //datajson structure : id-titre-contenu, to reach it : post.titre etc.
// //post is a free parameter for data function, necessary to reach content of data.json
// import Data from './data.json'

// function CardsProjets () {
//     return (
//         <div className="col">
//             {Data.map((post) => {
//                 return (
//                     <div>
//                         <div className="card">
//                             <div className="card">
//                                 <div className="img">
//                                     <img src={img} className="card-img-top" alt="logo de shifumi/hangman etc."/>
//                                 </div>
//                                 <div className="card-body d-flex flex-column justify-content-between">
//                                     <h5 className="card-title text-dark text-center text-decoration-underline my-3">{project.title}</h5>
//                                     <button type="button BUT_VOIR_MODAL" > voir mon projet</button>
//                                 </div>
//                             </div>
//                         </div>
//                             <div className="modal INSEREMODAL_ICI">
//                             <div className="insere TON JSON ICI genre {data.titre}">
//                             </div>
//                             </div>
//                         </div>
//                             );
//                         })}
//                     </div>
//                 );
// }

// export default CardsProjets;

// //va falloir surement faire un component pour chaque card genre shifumi.js
// //tu créer une class parce que va falloir interagir avec les enfants projetscards
// //mets les props - obligatoire
// //le but est avec les cartes que tu as crées de chaque, tu les rappelles chacun dans un tableau
// class Projets extends React.Component {
//     constructor (props) {
//         super (props);
//     }

//     render () {
//         return (
//         <div className=" container">
//             <section id="project" className="container-fluid">
//                 <h2 className="text-center"><h2> Mes projets</h2><br/>
//             <div className="row py-4">
//             <Shifumi />
//             <Hangman />
//             <TerreDeGeek />
//             <Memory />
//             </div>
//             </section>
//         </div>
//         );
//     }
// }

// export default Projets;