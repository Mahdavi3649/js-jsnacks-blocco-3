/* Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: 
nel primo array solo le auto a benzina, 
nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array */

const arrayCars = [
    // Primo modello - benz
    {
        Marca: 'Benz',
        Modello: 'C100',
        Alimentazione: 'benzina'
    },
    // Secondo modello - Toyota
    {
        Marca: 'Toyota',
        Modello: 'r7',
        Alimentazione: 'diesel'
    },
    // Terzo modello - volvo
    {
        Marca: 'volvo',
        Modello: 'mate1',
        Alimentazione: 'diesel'
    },
    // Quarto modello - Mitsubishi
    {
        Marca: 'Mitsubishi',
        Modello: 'j6',
        Alimentazione: 'diesel'
    },
    // Quinto modello - Fiat
    {
        Marca: 'Fiat',
        Modello: 'panda',
        Alimentazione: 'diesel'
    },
    // Sesto modello - Fiat
    {
        Marca: 'Fiat',
        Modello: 'Tipo',
        Alimentazione: 'diesel'
    },
    // Settimo modello - Nissan
    {
        Marca: 'Kia',
        Modello: 'k1',
        Alimentazione: 'elettrico'
    },
    // Ottavo modello - Opel
    {
        Marca: 'Nissan',
        Modello: 'micra',
        Alimentazione: 'elettrico'
    },
    // Nono modello - Volvo
    {
        Marca: 'Opel',
        Modello: 'Lico',
        Alimentazione: 'elettrico'
    },
    // Decimo modello - Tesla
    {
        Marca: 'Tesla',
        Modello: 'Model 3',
        Alimentazione: 'elettrico'
    },
]

// Verifica in console log
console.log(arrayCars);