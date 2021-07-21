import { ProxyState } from "./Appstate.js"
import { pokemonApisService } from "./Services/PokemonApisService.js"

export default class PokemonApisController {

  constructor() {

    this.getAllPokemons()
  }

  async getAllPokemons() {
    try {
      await pokemonApisService.getAllPokemons();
    } catch (error) {
      console.log(Error in pokemonApisController)
    }

  }
}
