import { Controller, Get, Param } from '@nestjs/common';
import { PokeapiService } from './pokeapi.service';

//aqui es donde se crean las rutas y se llamn los services y los providers
//@Controller('api/pokemon') -->first option
@Controller('api/pokemon')
export class PokeapiController {

    constructor(private pokeapiService: PokeapiService){} 

    //Return 100 pokemon with name and url
    @Get()
    getLimitPokemon(){
        return this.pokeapiService.getLimitPokemon(100);
    }

    //Return pokemon by ID (param) with name and types
    @Get('/:id')
    getPokemonById(@Param('id') id: number){
        return this.pokeapiService.getPokemonById(id);
    }

    //Return pokemon by ID (param) with name and types
    @Get('/pokemonAndTypes/:id')
    getPokemonAndTypesById(@Param('id') id: number){
        return this.pokeapiService.getPokemonAndTypesById(id);
    }
}
