import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      etage: 0
    }
  }
  handleClickUp = e => {
    e.preventDefault()
    for (let up = 0; up <= 6; up++) {
      console.log("UP", up)
      /*modifier la state*/
      this.setState({ etage: up })
    }
  }
  handleClickDown = e => {
    e.preventDefault()
    for (let down = 6; down >= 0; down--) {
      console.log("down", down)
      /*modifier la state*/
      this.setState({ etage: down })
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>Exercice de l'ascenseur</p>
        <p>Etage :</p>
        <p>{this.state.etage} </p>
        {/* AFICHER LA STATE   */}
        <button onClick={this.handleClickUp}> UP </button>
        <button onClick={this.handleClickDown}> down </button>
      </div>
    )
  }
}

export default App
