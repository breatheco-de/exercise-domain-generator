<!--hide-->
# El Generador de Nombres de Dominio
<!--endhide-->

Encontrar un nombre de dominio es difícil, ¿por qué no automatizarlo? :)

## 🌱 Cómo comenzar este proyecto

No clones este repositorio porque vamos a usar una plantilla diferente.

Recomendamos abrir el `vanillajs boilerplate` usando un entorno de desarrollo como [Codespaces](https://4geeks.com/es/lesson/tutorial-de-github-codespaces) (recomendado) o [Gitpod](https://4geeks.com/es/lesson/como-utilizar-gitpod). Alternativamente, puedes clonarlo en tu computadora local usando el comando `git clone`.

Este es el repositorio que necesitas abrir o clonar:

```text
https://github.com/4GeeksAcademy/vanillajs-hello
```

**👉 Por favor sigue estos pasos sobre** [cómo comenzar un proyecto de programación](https://4geeks.com/es/lesson/como-comenzar-un-proyecto-de-codificacion).


> 💡 Importante: Recuerda guardar y subir tu código a GitHub creando un nuevo repositorio, actualizando el remoto (`git remote set-url origin <your new url>`) y subiendo el código a tu nuevo repositorio usando los comandos `add`, `commit` y `push` desde la terminal de git.

### Luego sigue estos pasos:

1. Crea un archivo JavaScript `app.js`.
2. Agrega tu código en el archivo.
2. Tienes que usar `console.log("Cualquier string");` para imprimir un mensaje en la consola.
4. Ejecuta tu código escribiendo en la terminal: `$ node app.js` **si lo ejecutas localmente, asegúrate de tener node.js**

## 📝 Instrucciones

1. Crea un script que genere todas las combinaciones posibles de nombres de dominio de una lista de pronombres, adjetivos y sustantivos, por ejemplo:

```js
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
```

Debe generar algo como:

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

## 💡 Pistas

+ Deberás usar los bucles o loops anidados para mezclar los diferentes valores.

+ Tus herramientas: bucles for, concatenación de strings.

## 😎 ¿Te sientes con confianza?

- Agrega varios tipos de extensiones, por ejemplo: .com, .net, .us, .io, etc.

- Agrega "domain hacks" donde la extensión forma parte del dominio, por ejemplo: En lugar de `puedes.com` el "hack" sería `pued.es` porque sigue diciendo "puedes" pero se aprovecha la extensión `.es`.

## Un poco de historia sobre el proyecto

Antes de que el mercado de dominios fuera centralizado y se convirtiera en una mafia controlada por Godaddy, Enom y algunos otros. Las personas como tú y yo podíamos comprar un dominio `.com` relativamente fácil. 

De hecho, este proyecto fue construido originalmente en 2002 por uno de los maestros de 4Geeks mientras buscaba nombres de dominio para varios proyectos.

Este y otros proyectos son usados para [aprender a programar](https://4geeksacademy.com/es/aprender-a-programar/aprender-a-programar-desde-cero) por parte de los alumnos de 4Geeks Academy [Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp) realizado por [Alejandro Sánchez](https://twitter.com/alesanchezr) y muchos otros contribuyentes. Conoce más sobre nuestros [Cursos de Programación](https://4geeksacademy.com/es/curso-de-programacion-desde-cero?lang=es) para convertirte en [Full Stack Developer](https://4geeksacademy.com/es/coding-bootcamps/desarrollador-full-stack/?lang=es), o nuestro [Data Science Bootcamp](https://4geeksacademy.com/es/coding-bootcamps/curso-datascience-machine-learning).
