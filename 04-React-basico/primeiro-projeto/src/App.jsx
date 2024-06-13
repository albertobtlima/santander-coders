import React from "react";
import "./styles/App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";

import artcle1Img from "./assets/images/article1.png";
import artcle2Img from "./assets/images/article2.png";
import artcle3Img from "./assets/images/article3.png";

// Componente em classe é uma classe que herda a classe Component do React,
// e retorna HTML dentro do método render.

class App extends React.Component {
  // Método responsável por renderizar o conteúdo HTML do nosso componente
  render() {
    return (
      <>
        <Navbar />
        <section id="articles">
          <Article 
            title="Designing Dashboards"
            provider="NASA"
            description="Exemplo 01 ipsum dolor sit amet consectetur adipisicing elit. Autem molestias aperiam, temporibus perferendis dolores omnis animi, quasi." 
            thumbnail={artcle1Img}
          />
          <Article 
            title="Vibrant Portraits" 
            provider="SpaceNews"
            description="Exemplo 02 ipsum dolor sit amet consectetur adipisicing elit. Autem molestias aperiam, temporibus perferendis dolores omnis animi, quasi."
            thumbnail={artcle2Img}
          />
          <Article 
            title="36 Days of Malayalam type" 
            provider="Spaceflight Now"
            description="Exemplo 03 ipsum dolor sit amet consectetur adipisicing elit. Autem molestias aperiam, temporibus perferendis dolores omnis animi, quasi."
            thumbnail={artcle3Img}
          />
          <Article
            title="Exemplo4" 
            provider="Qualquer"
            description="Exemplo 04 ipsum dolor sit amet consectetur adipisicing elit. Autem molestias aperiam, temporibus perferendis dolores omnis animi, quasi."
            thumbnail={artcle1Img}
          />
        </section>
      </>
    );
  }
}

export default App;
