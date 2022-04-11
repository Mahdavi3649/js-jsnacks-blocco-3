/* A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
 */
const stringArray = ["grogu", "MANDO", "Luke"];

const newStringArray = []; 

stringArray.forEach(element => {    // ciclo per il primo array
    newStringArray.push(element.charAt(0).toLocaleUpperCase() + element.slice(1).toLocaleLowerCase()) // imposto il primo carattere come  maiuscolo e a partire dal secondo in minuscolo
});

console.log(newStringArray); 