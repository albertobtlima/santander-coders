import React from "react";
import articleImg from "../../assets/images/article1.png";
import "./styles.css";

export class Article extends React.Component {
   render() {
      return (
         <article id="article">
            <img src={articleImg} alt="" />

            <div className="article-infos">
               <h2>Designing Dashboards</h2>
               <h3>NASA</h3>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestias aperiam, temporibus perferendis dolores omnis animi, enim distinctio sed totam ipsa ab, magnam nam ut suscipit possimus repudiandae. Nemo, quasi.
               </p>
            </div>
         </article>
      )
   }
}
