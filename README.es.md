# The Domain Name Generator

Encontrar un nombre de dominio es difícil, ¿por qué no automatizarlo? :)

## 🌱  Cómo iniciar este proyecto

No clones este repositorio.


 El primer paso para comenzar a codificar es clonar el [vanillajs boilerplate](https://github.com/4GeeksAcademy/vanillajs-hello) en tu computador local o con Gitpod.

a) Si usas Gitpod (recomendado) puedes clonar el boilerplate [clic aquí](https://github.com/4GeeksAcademy/vanillajs-hello).

b) Si trabajas localmente, escribe el siguiente comando en tu terminal: `git clone https://github.com/4GeeksAcademy/vanillajs-hello`.

💡 Importante: Recuerda actualizar el `remote` del proyecto con el de tu repositorio usando `git remote set-url origin <your new url>`, y luego guardar tu código en tu nuevo repositorio usando `add`, `commit` y `push`.

### Luego sigue estas instrucciones:

1. Crea un archivo javascript `app.js`.
2. Agrega tu código en el archivo.
2. Tienes que usar `console.log("Hello World");` para imprimir un mensaje en la consola.
4. Ejecuta tu codigo escribiendo en la terminal: `$ node app.js`** si lo ejecutas localmente, asegúrate de tener node.js **

## 📝 Instrucciones

Crea un script que genere todas las combinaciones posibles de nombres de dominio de una lista de pronombres, adjetivos y sustantivos, por ejemplo:

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

### 💡Sugerencias

Deberás usar los bucles o loops anidados para mezclar los diferentes valores.

Tus herramientas: Para bucles o loops, concatenación de strings.

## 😎 ¿Te sientes con confianza?

- Agrega varios tipos de extensiones por ejemplo: .com, .net, .us, .io, etc.
- Agrega "domain hacks" donde la extensión forma parte del dominio, por ejemplo: En lugar de `puedes.com` el "hack" seria `pued.es` porque sigue diciendo "puedes" pero se aprovecha la extension `.es`.

## Un poco de historia sobre el proyecto

Antes de que el mercado de dominios fuera centralizado y se convirtiera en una mafia controlada por Godaddy, Enom y algunos otros. Las personas como tú y yo pudimos comprar un dominio .com de forma realmente fácil. 

De hecho, este proyecto fue construido originalmente en 2002 por uno de los maestros de 4Geeks mientras buscaba nombres de dominio para varios proyectos.

