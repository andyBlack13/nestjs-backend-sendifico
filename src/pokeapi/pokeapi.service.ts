import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Pokemon } from './pokeapi.entity';

//http request, database connection and external apis.

@Injectable()
export class PokeapiService {

    //Get pokemon with limit.
    async getLimitPokemon(limitPokemon?: number){
        const limit = limitPokemon ? limitPokemon : 20;

        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
        const pokemonList = response.data.results.map((pokemon) => ({
          name: pokemon.name,
          url: pokemon.url,
        }));
    
        return pokemonList;
    }

    //Get pokemon by ID.
    async getPokemonById(id: number){
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

        console.log(response);
        const pokemon = {
            name: response.data.name,
            types: response.data.types
        };

        return pokemon;
    }

    //Get pokemon and types by ID.
    async getPokemonAndTypesById(id: number){
        //const response = await axios.get(`https://pokeapi.co/api/v2/type/${id}`);
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const urlTypes = [];

        response.data.types.forEach(type => {
            //console.log(type.type.url)
            urlTypes.push(type.type.url)
        });

        console.log("array", urlTypes);
        
        // recorrer y buscar los lenguajes de las urls de los tipos.
        const getTypes = await Promise.all(
            urlTypes.map(async (url) => {
                const typeResponse = await axios.get(url);
            
                const spanish = typeResponse.data.names.find(
                    (name) => name.language.name === 'es',
                );
                const japanese = typeResponse.data.names.find(
                    (name) => name.language.name === 'ja',
                );

                return {
                    slot: typeResponse.data.slot,
                    type: {
                        name: typeResponse.data.name,
                        url: typeResponse.data.url,
                        names: [spanish, japanese]
                    }
                };
            })
        );

        const pokemon = {
            name: response.data.name,
            types: getTypes,
        };
        

        return pokemon;
    }
}
