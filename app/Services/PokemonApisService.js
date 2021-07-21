import { ProxyState } from "./AppState.js"
import { Pokemon } from "../Models/Pokemon.js"
import { pokemonApi } from "./AxoisService.js"

class PokemonApisService {
  async getAllPokemons() {
    try {
      let res = await pokemonApi.get()
      console.log(res.data)
      ProxtState.allPokemonApis = res.data.results
    } catch (error) {
      console.log("Error encountered in pokemonAPi Data fetch")
    }

  }
}
export const pokemonApisService = new PokemonApisService()