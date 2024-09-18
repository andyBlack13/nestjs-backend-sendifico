<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Esta aplicación está desarrollada con [Nest](https://github.com/nestjs/nest), un framework de Node.js que facilita la construcción de aplicaciones del lado del servidor. La API es RESTful y consume datos de la [PokeAPI](https://pokeapi.co/docs/v2), permitiendo realizar consultas sobre los Pokémon, sus detalles, y obtener información adicional sobre sus tipos, con traducciones al español y japonés.

## Funcionalidades

1. **Consultar una lista de Pokémon:**
   - Puedes obtener los primeros 100 Pokémon con sus nombres y URLs.
   - Endpoint: `GET /api/pokemon`
   - Ejemplo: `http://localhost:3000/api/pokemon`

2. **Consultar detalles de un Pokémon específico:**
   - Proporciona el nombre y los tipos de un Pokémon al buscar por su ID.
   - Endpoint: `GET /api/pokemon/:id`
   - Ejemplo: `http://localhost:3000/api/pokemon/1`

3. **Consultar detalles avanzados de un Pokémon:**
   - Además del nombre y los tipos, este endpoint también devuelve las traducciones al español y japonés de cada tipo del Pokémon.
   - Endpoint: `GET /api/pokemonAndTypes/:id`
   - Ejemplo: `http://localhost:3000/api/pokemonAndTypes/1`

## Tecnologías Utilizadas

- **NestJS:** Framework de Node.js para la creación de aplicaciones del lado del servidor.
- **Axios:** Librería para realizar solicitudes HTTP a la PokeAPI.
- **Node.js:** Entorno de ejecución JavaScript para construir aplicaciones del lado del servidor.

## Configuración del proyecto

1. **Clona el repositorio**

```bash
$ git clone https://github.com/andyBlack13/nestjs-backend-sendifico.git
```

2. **Navega al directorio**

```bash
$ cd nestjs-backend-sendifico
```

3. **Instala dependencias**

```bash
$ npm install
```

4. **Ejecuta la aplicación**

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

```

5. **La API esta disponible en [http://localhost:3000](http://localhost:3000).**

