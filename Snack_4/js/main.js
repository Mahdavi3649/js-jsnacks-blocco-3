/* Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età. */


const persons = [{
  nome: 'John',
  cognome: 'Lace',
  eta: 23,
},
{
  nome: 'Sam',
  cognome: 'Vallington',
  eta: 17,
},
{
  nome: 'Michael',
  cognome: 'Foster',
  eta: 26,
},
{
  nome: 'Brad',
  cognome: 'lean',
  eta: 19,
},
{
  nome: 'Alex',
  cognome: 'Downmen',
  eta: 44,
},
{
  nome: 'Mark',
  cognome: 'Vinster',
  eta: 16,
}
]

const exam = persons.map(persona => {

  if (persona.eta < 18){
    return (`${persona.cognome} ${persona.nome} ha ${persona.eta}, non può guidare`)

  }else{
    return (`${persona.cognome} ${persona.nome} ha ${persona.eta}, può guidare`)
  }
});
console.log(exam);