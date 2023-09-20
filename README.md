<!--hide-->
# The Domain Name Generator
<!--endhide-->

Finding a domain name is hard, so why not automate it? :)

## 🌱 How to start this project

Do not clone this repository because we are going to be using a different template.

We recommend opening the `vanillajs boilerplate` using a provisioning tool like [Codespaces](https://4geeks.com/lesson/what-is-github-codespaces) (recommended) or [Gitpod](https://4geeks.com/lesson/how-to-use-gitpod). Alternatively, you can clone it on your local computer using the `git clone` command.

This is the repository you need to open or clone:

```text
https://github.com/4GeeksAcademy/vanillajs-hello
```

**👉 Please follow these steps on** [how to start a coding project](https://4geeks.com/lesson/how-to-start-a-project).


> 💡 Important: Remember to save and upload your code to GitHub by creating a new repository, updating the remote (`git remote set-url origin <your new url>`), and uploading the code to your new repository using the `add`, `commit` and `push` commands from the git terminal.

### Then follow these steps:

1. Create one `app.js` JavaScript file.
2. Add your code inside your app.js file.
3. You have to use `console.log("Any string");` to show something on the console.
4. Run your code by typing: `$ node app.js`, **if you run it locally, make sure you have node.js**

## 📝 Instructions

1. Create a script that generates all the possible domain name combinations from a list of pronouns, adjectives and nouns, for example:

```js
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
```

Should generate something like:

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

## 💡 Hints

+ You'll need to use nested for loops in order to mix the different values together.

+ Your tools: For loop, string concatenation.

## 😎 Feeling confident?

- Add several types of extensions: .com, .net, .us, .io, etc.

- Add domain hacks, for example: instead of `lastOfUs.com` you can use the `.us` domain like this: `lastOf.us`

## A bit of history about the project

Before the domain market was centralized and converted into a mafia controlled by Godaddy, Enom, and others, normal people like you and me were able to buy a `.com` domain relatively easily. 

In fact, this project was originally built in 2002 by one of the 4Geeks teachers while he was trying to find domain names to buy for several projects.

This and many other projects are built by students as part of the 4Geeks Academy [Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp) by [Alejandro Sanchez](https://twitter.com/alesanchezr) and many other contributors. Find out more about our [Full Stack Developer Course](https://4geeksacademy.com/us/coding-bootcamps/part-time-full-stack-developer), and [Data Science Bootcamp](https://4geeksacademy.com/us/coding-bootcamps/datascience-machine-learning).
