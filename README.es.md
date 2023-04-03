<!--hide-->
# El Generador de Nombres de Dominio
<!--endhide-->

Encontrar un nombre de dominio es difícil, ¿por qué no automatizarlo? :)

## 🌱 Cómo comenzar este proyecto

No clones este repositorio porque vamos a usar una plantilla diferente.

Recomendamos abrir el `vanillajs boilerplate` usando una herramienta de aprovisionamiento como [Codespaces](https://4geeks.com/lesson/what-is-github-codespaces) (recomendado) o [Gitpod](https://4geeks.com/lesson/how-to-use-gitpod). Alternativamente, puedes clonarlo en tu computadora local usando el comando `git clone`.

Este es el repositorio que necesitas abrir o clonar:

```
https://github.com/4GeeksAcademy/vanillajs-hello
```

**👉 Por favor sigue estos pasos** [cómo comenzar un proyecto de codificación](https://4geeks.com/lesson/how-to-start-a-project).


💡 Importante: Recuerda guardar y subir tu código a GitHub creando un nuevo repositorio, actualizando el remoto (`git remote set-url origin <your new url>`) y subiendo el código a tu nuevo repositorio usando los comandos `add`, `commit` y `push` desde la terminal de git.

### Luego sigue estas instrucciones:

1. Crea un archivo javascript `app.js`.
2. Agrega tu código en el archivo.
2. Tienes que usar `console.log("Hello World");` para imprimir un mensaje en la consola.
4. Ejecuta tu código escribiendo en la terminal: `$ node app.js` **si lo ejecutas localmente, asegúrate de tener node.js**

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

- Agrega varios tipos de extensiones, por ejemplo: .com, .net, .us, .io, etc.

- Agrega "domain hacks" donde la extensión forma parte del dominio, por ejemplo: En lugar de `puedes.com` el "hack" sería `pued.es` porque sigue diciendo "puedes" pero se aprovecha la extensión `.es`.

## Un poco de historia sobre el proyecto

Antes de que el mercado de dominios fuera centralizado y se convirtiera en una mafia controlada por Godaddy, Enom y algunos otros. Las personas como tú y yo pudimos comprar un dominio .com de forma realmente fácil. 

De hecho, este proyecto fue construido originalmente en 2002 por uno de los maestros de 4Geeks mientras buscaba nombres de dominio para varios proyectos.

Este y otros proyectos son usados para [aprender a programar](https://4geeksacademy.com/es/aprender-a-programar/aprender-a-programar-desde-cero) por parte de los alumnos de 4Geeks Academy [Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp) realizado por [Alejandro Sánchez](https://twitter.com/alesanchezr) y muchos otros contribuyentes. Conoce más sobre nuestros [Curso de Programación](https://4geeksacademy.com/es/curso-de-programacion-desde-cero?lang=es) para convertirte en [Full Stack Developer](https://4geeksacademy.com/es/coding-bootcamps/desarrollador-full-stack/?lang=es), o nuestro [Data Science Bootcamp](https://4geeksacademy.com/es/coding-bootcamps/curso-datascience-machine-learning).