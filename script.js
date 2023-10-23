class person {
    constructor(id, pseudo, picture, age, gender, search, region, description){
        this.id = id;
        this.pseudo = pseudo;
        this.picture = picture;
        this.age = age;
        this.gender = gender;
        this.search = search;
        this.region = region;
        this.description = description;
    }
}

const personArray= [homme1, homme2, homme3, homme4, homme5, homme6, homme7, homme8, homme9, homme10, homme11, homme12, femme1, femme2, femme3, femme4, femme5, femme6, femme7, femme8, femme9, femme10, femme11, femme12];

// Récupérer les informations du profil


const profilElement = document.getElementById("profil"); // Remplacez "profil" par l'ID de votre élément contenant le profil

if (profilElement) {
    const id = profilElement.getAttribute("data-id");
    const pseudo = profilElement.querySelector(".pseudo").textContent;
    const picture = profilElement.querySelector(".picture").getAttribute("src");
    const age = profilElement.querySelector(".age").textContent;
    const gender = profilElement.querySelector(".gender").textContent;
    const search = profilElement.querySelector(".search").textContent;
    const region = profilElement.querySelector(".region").textContent;
    const description = profilElement.querySelector(".description").textContent;

    // Stocker les informations dans des cookies
    document.cookie = `id=${id}`;
    document.cookie = `pseudo=${pseudo}`;
    document.cookie = `picture=${picture}`;
    document.cookie = `age=${age}`;
    document.cookie = `gender=${gender}`;
    document.cookie = `search=${search}`;
    document.cookie = `region=${region}`;
    document.cookie = `description=${description}`;
}

// Fonction pour récupérer une valeur de cookie par son nom
function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split("=");
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
}

// Exemple d'utilisation pour récupérer une information spécifique
const ageFromCookie = getCookie("age");
console.log("Âge récupéré depuis le cookie : " + ageFromCookie);

let homme1 = new homme (
    '97',
    'Kim',
    'assets/homme1.jpg',
    '36',
    'femmes et hommes',
    '76',
    'description',
    'homme'
    );
let homme2 = new homme (
    '98',
    'Patrice',
    'assets/homme2.jpg',
    '43',
    'hommes',
    '27',
    'description',
    'homme'
    );
let homme3 = new homme (
    '99',
    'Emmanuel',
    'assets/homme3.jpg',
    '41',
    'femmes',
    '75',
    'description',
    'homme'
    );
let homme4 = new homme (
    '100',
    'Ajay',
    'assets/homme4.jpg',
    '32',
    'femmes',
    '59',
    'description',
    'homme'
    );
let homme5 = new homme (
    '101',
    'Frédéric',
    'assets/homme5.jpg',
    '54',
    'femmes',
    '63',
    'description',
    'homme'
    );
let homme6 = new homme (
    '102',
    'Gerard',
    'assets/homme6.jpg',
    '59',
    'femmes',
    '14',
    'description',
    'homme'
    );
let homme7 = new homme (
    '103',
    'Nadesh',
    'assets/homme7.jpg',
    '27',
    'femmes',
    '69',
    'description',
    'homme'
    );
let homme8 = new homme (
    '104',
    'Marc',
    'assets/homme8.jpg',
    '38',
    'hommes',
    '31',
    'description',
    'homme'
    );
let homme9 = new homme (
    '105',
    'Léo',
    'assets/homme9.jpg',
    '20',
    'femmes',
    '33',
    'description',
    'homme'
    );
let homme10 = new homme (
    '106',
    'David',
    'assets/homme10.jpg',
    '26',
    'femmes',
    '35',
    'description',
    'homme'
    );
let homme11 = new homme (
    '107',
    'Henry',
    'assets/homme11.jpg',
    '51',
    'femmes',
    '13',
    'description',
    'homme'
    );
let homme12 = new homme (
    '108',
    'Homme1',
    'assets/homme12.jpg',
    '24',
    'femmes',
    '76',
    'description',
    'homme'
    );
let femme1 = new femme (
    '109',
    'Laeticia',
    'assets/femme1.jpg',
    '29',
    'homme',
    '35',
    'description',
    ''
    );
let femme2 = new femme (
    '110',
    'Karen',
    'assets/femme2.jpg',
    '38',
    'femmes',
    '77',
    'description',
    ''
    );
let femme3 = new femme (
    '111',
    'Laura',
    'assets/femme3.jpg',
    '32',
    'hommes',
    '75',
    'description',
    ''
    );
let femme4 = new femme (
    '112',
    'Catherine',
    'assets/femme4.jpg',
    '56',
    'hommes',
    '27',
    'description',
    ''
    );
let femme5 = new femme (
    '113',
    'Elisabeth',
    'assets/femme5.jpg',
    '58',
    'hommes et femmes',
    '69',
    'description',
    ''
    );
let femme6 = new femme (
    '114',
    'Charlotte',
    'assets/femme6.jpg',
    '34',
    'hommes et femmes',
    '14',
    'description',
    ''
    );
let femme7 = new femme (
    '115',
    'Louise',
    'assets/femme7.jpg',
    '24',
    'hommes',
    '80',
    'description',
    ''
    );
let femme8 = new femme (
    '116',
    'Léanne',
    'assets/femme8.jpg',
    '19',
    'femmes et hommes',
    '95',
    'description',
    ''
    );
let femme9 = new femme (
    '117',
    'Juhi',
    'assets/femme9.jpg',
    '21',
    'hommes',
    '33',
    'description',
    ''
    );
let femme10 = new femme (
    '118',
    'Karine',
    'assets/femme10.jpg',
    '45',
    'hommes',
    '31',
    'description',
    ''
    );
let femme11 = new femme (
    '119',
    'Veronique',
    'assets/femme11.jpg',
    '57',
    'femmes',
    '35',
    'description',
    ''
    );
let femme12 = new femme (
    '120',
    'Piper',
    'assets/femme12.jpg',
    '20',
    'hommes',
    '76',
    'description',
    ''
    );

