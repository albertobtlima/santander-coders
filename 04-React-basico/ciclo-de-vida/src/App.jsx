import React from "react";

class App extends React.Component {
  constructor() {
    super();

    this.state = { showCounter: false }
  }

  render () {
    return (
      <div>
        <h1>Ciclo de Vida no React</h1>

        <button>Mostrar componente</button>
      </div>
    );
  }
}

export default App;
