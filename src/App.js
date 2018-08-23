import React, { Component } from "react";
import "./App.css";
import Form from "./components/form";

const API_KEY = "03debc5223bf2be79373472cf17d7d6d";

class App extends Component {
  state = {
    recipes: []
  };
  getRecipe = async e => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(
      `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=shredded%20chicken&count=10`
    );

    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Search For A Recipe</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        {this.state.recipes.map(recipe => {
          return <p key={recipe.recipe_id}>{recipe.title}</p>;
        })}
      </div>
    );
  }
}

export default App;
