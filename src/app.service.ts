import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pokeapi NestJs Sendifico</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            padding: 20px;
          }
          h1 {
            color: #333;
          }
          p {
            margin-bottom: 10px;
          }
          code {
            display: block;
            margin: 10px 0;
            padding: 10px;
            background: #f4f4f4;
            border: 1px solid #ddd;
            border-radius: 4px;
          }
        </style>
      </head>
      <body>
        <h1>API Pokeapi</h1>
        <p>Para testear nuestra API, copia los enpoints y pegarlos en tu navegador. Puedes cambiar los IDs si lo deseas</p>
        <code>1. https://nestjs-backend-sendifico.vercel.app/api/pokemon</code>
        <code>2. https://nestjs-backend-sendifico.vercel.app/api/pokemon/1</code>
        <code>3. https://nestjs-backend-sendifico.vercel.app/api/pokemon/pokemonAndTypes/1</code>
        <p>Gracias!</p>
      </body>
      </html>
    `;
  }
}
