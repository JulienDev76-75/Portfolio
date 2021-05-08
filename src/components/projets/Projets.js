import React from "react";
import Data from "./data.json"

function Projets (){
    return (
        <div className="project_list">
            {Data.map(post => {
            return (
                <>
                <h2>{post.id}</h2>
                <p>{post.titre}</p>
                <p>{post.contenu}</p>
                </>);
        })}
        </div>
    )

}
export default Projets;