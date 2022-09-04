/*promises => exple : je veux prendre l'information d'un utilisateur dans db mais dans db msajel date naissance w ena nhib nraja3 il age donc lazemni nistana temps d'excution a partir min date naissance i5arjli il age n'est pas seul le contraint de temps on a des autre contraint  donc 3 state de promise 
fulfilled => el wa3d isir
reject => el wa3d masarich
pending mabinet'hom il requette mazelt mawislitch */
const promiseFunc=()=>{
return new Promise((resolve,reject)=>{
    try{
        const data ='request succed'
        resolve(data)
    }catch(e){
        reject(new Error(e))
    }
})}

console.log(primiseFunc())