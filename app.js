let pronoun = ['the','our'];
let adj = ['great', 'big', 'little' ];
let noun = ['jogger','racoon'];
let domain = "";

for (let i = 0; i < pronoun.length; i++) {
   //console.log(pronoun[i]);

    for (let i = 0; i < adj.length; i++) {
        //console.log(adj[i]);

        for (let i = 0; i < noun.length; i++) {
            domain += `${pronoun[i]}${noun[i]}${adj[i]}.com <br>`;
            console.log(`${pronoun[i]}${noun[i]}${adj[i]}.com`);
         }   

     }

}

document.querySelector("#domain").innerHTML = domain;
