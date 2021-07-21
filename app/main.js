//import ValuesController from "./Controllers/ValuesController.js";
import PokemonApisController from "./Controllers/PokemonApisController.js"

class App {

  pokemonApisController = new PokemonApisController();
  // valuesController = new ValuesController();
}

window["app"] = new App();
