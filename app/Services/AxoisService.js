
// @ts-ignore
export const pokemonApi = axois.create({
  baseURL: 'https://pokeapi.co/api/v2',
  timeout: 10000
})

// @ts-ignore
export const sandbox = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/shankerkarra/pokemon',
  timeout: 10000
})