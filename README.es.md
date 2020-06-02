# The Domain Name Generator

Encontrar un nombre de dominio es difícil, ¿por qué no automatizarlo? :)

## 💻 Installation

1. Empieza un proyecto nuevo vacio.
2. Crea un fichero `app.js` que va a contener tu codigo.
3. Agrega tu codigo dentro del fichero.
4. Puedes utilizar `console.log("Any string");` para imprimir un mensaje en la consola.
5. Ejecuta tu codigo typeando en la linea de comandos: `$ node app.js`.

## 📝 Instrucciones

Crea un script que genere todas las combinaciones posibles de nombres de dominio.
de una lista de pronombres, adjetivos y sustantivos, por ejemplo:

```js
  var pronoun = ['the','our'];
  var adj = ['great', 'big' ];
  var noun = ['jogger','racoon'];
```

Debes generar algo como:

```bash
thegreatjogger.com
thegreatracoon.com
ourgreatjogger.com
ourgreatracoon.com
thebigjogger.com
thebigracoon.com
ourbigjogger.com
ourbigracoon.com
```

### 💡Sugerencia

Deberás usar los bucles anidados para mezclar los diferentes valores.
Sus herramientas: Para bucle, concatenación de strings.

## 😎 Te sientes con confianza?

- Permite que las extensiones de dominio tambien puedan variar, por ejemplo: .com, .net, .us, .io, etc.
- Agrega "domain hacks" donde la extension forma parte del dominio, por ejemplo: En lugar de `puedes.com` el "hack" seria `pued.es` porque sigue diciendo "puedes" pero se aprovecha de la extension `.es`.

## Un poco de historia sobre el proyecto

Antes de que el mercado de dominios fuera centralizado y convertido en una mafia.
controlado por Godaddy, Enom y algunos otros. Ciudadanos como tú y yo
Fueron capaces de comprar un dominio .com de forma realmente fácil. 

De hecho, este proyecto fue construido originalmente en 2002 por uno de los maestros de 4Geeks
mientras intentaba encontrar nombres de dominio para comprar para varios proyectos.

