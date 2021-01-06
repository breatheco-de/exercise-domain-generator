var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];
var dom = ['.com','.cl']

function combinaciondominios(pronoun, adj, noun, dominio){
    for (let i=0; i <pronoun.length; i++){
        for (let a=0; a <adj.length; a++){
            for (let b =0; b <noun.length; b++){
                for(let k = 0 ; k < dominio.length; k++){
                    console.log(pronoun[i] + adj[a] + noun[b] + dominio[k]);
                }
            }
            
         }
      
    }
}
combinaciondominios(pronoun, adj, noun, dom);


