//console.log("hola dese la console")//

let pronoun = [ "the", "our"];
let adj = ["great" ,"big"];
let noun= ["jogger" , "reacoon"];
let namedom = ["us","org" , "com" , "net"];
let domain = [];
let dom= [];

for ( let i =0;i<pronoun.length;i++){
    dom=pronoun[i];
    for(let j=0;j<adj.length;j++ ){
         dom=pronoun[i]+adj[j];
         for (let t=0;t<noun.length;t++){
             dom=pronoun[i]+adj[j]+noun[t]
             for(let x=0;x<namedom.length;x++){
                 domain=namedom[x]
                 console.log(dom +"."+domain);
             }
         }
    }
}
