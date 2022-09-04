/*promise pour que la req vers un ser est ce que wislit wala ken wilit raja3 3 sinon 4 */
var x=3
const promise = new Promise((resolve, reject) => {
  /*raja3li 3 mba3d 4s*/
  setTimeout(() => {
    if (x > 5) {
      resolve(3);
    } else {
      reject(4);
    }
  }, 4000);
});
/*idha wislitlik il resultat 5aliha fi var x w affichili il message*/
promise
  .then((x) => {
    console.log("resolved with value", x);
  })
  .catch((err) => console.log("catched err", err));
