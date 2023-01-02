//Gestion de la modal
closeJokesModal.onclick = () =>{
    jokesModal.style.display = "none";
    jokeAnswer.style.display = 'none';

}

closeError.onclick = () =>{
    errorModal.style.display = "none";
}

modalButton.onclick =() =>{
    jokeAnswer.style.display = 'block';
}


/*gestion du calendrier*/

//Déclaration des variables
let jokesDebut = [
    'Comment appelle-t-on un chat qui tombe dans les pots de peinture un 25 décembre ?', //Blague 1
    'Qu\'est-ce qui a 34 jambes, 9 têtes et 2 bras ?', //Blague 2
    'Comment fait-on entrer 2 Pères Noëls dans un réfrigérateur ?', //Blague 3
    'Monsieur et Madame Relande ont un fils. Comment s’appelle t-il ?', //Blague 4
    'Monsieur et Madame Duciel ont cinq enfants. Comment s\'appellent-ils ?', //Blague 5
    'Pourquoi le Père Noël porte-t-il des bretelles noires ?', //Blague 6
    'Que dit un sapin de Noël qui arrive en retard le soir du réveillon ?', //Blague 7
    'Tu connais la blague de Noël qui fait peur ?', //Blague 8
    'À quoi rêvent les dindes à Noël ?', //Blague 9
    'Qu’est-ce qui est rouge, vert et blanc ?', //Blague 10
    'Qu\'est ce que ressent Santa Claus lorsqu\'il reste coincé dans la cheminée ?', //Blague 11
    'Que dit un sapin énervé à un autre sapin :',//Blague 12
    'Pourquoi il fait si froid à Noël ?',//Blague 13
    'Quel est le comble pour un bonhomme de neige ?', //Blague 14
    'Comment appelle-t-on un vieux bonhomme de neige ?', //Blague 15
    'Pourquoi le père noël a-t-il une barbe blanche ?', //Blague 16
    'Mon premier est une lettre de l’alphabet. Mon second est une partie du corps. Mon tout est offert à noël. Qui suis-je?', //Blague 17
    'Quel est le gâteau le plus dur au monde ?', //Blague 18
    'Quel spectacle les écureuils vont-ils voir à Noël ?',//Blague 19
    'Savez-vous pourquoi le Père Noël rit tout le temps ?',//Blague 20
    'Les chaussettes en forment une. Mon deuxième est une fête qui a lieu en Décembre. Mon tout est la personne qui dépose les cadeaux au pied du sapin. Qui suis-je?',//Blague 21
    'Tu fais quoi pour Noël ?', //Blague 22
    'Quelle est la ville préférée des animaux du Père Noël ?',//Blague 23
    'Qu\'est-ce que Mickael Jackson (ou un pedophile) et le père Noël ont en commun? '
];

let jokesEnd = [
    'Réponse : Un chat peint de noël', //Blague 1
    'Réponse : Le Père Noël & ses rennes...', //Blague 2
    'Réponse : Impossible, il n\'existe qu\'un seul père noël !', //Blague 3
    'Réponse : Guy (guirlande)', //Blague 4
    'Réponse : Betty, Baba, Noël, Quentin, Sandra (réponse en chantant un air bien connu...)', //Blague 5
    'Réponse : Pour tenir son pantalon !', //Blague 6
    'Réponse : Je vais encore me faire enguirlander !!!', //Blague 7
    'Réponse : Attention tu vas avoir les boules. (Bouuuuhhhh !)', //Blague 8
    'Réponse : Fêter le Nouvel An.', //Blague 9
    'Réponse : un lutin qui a attrapé un coup de soleil.', //Blague 10
    'Réponse : De la Claus-Trophobie', //Blague 11
    'Réponse : "Moi, Noël, ça me fout les boules !',//Blague 12
    'Réponse : parce que c’set au mois de Décembrrrrr.',//Blague 13
    'Réponse : se faire carotte.', //Blague 14
    'Réponse : Une flaque', //Blague 15
    'Réponse : pour ne pas être confondu avec le Petit Chaperon Rouge.', //Blague 16
    'K-Dos (cadeau)', //Blague 17
    'Réponse : La bûche de Noël.', //Blague 18
    'Réponse : Casse-Noisette.',//Blague 19
    'Réponse : Parce que ce n\'est pas lui qui paye les cadeaux',//Blague 20
    'Réponse : Le père Noël',//Blague 21
    'Réponse : Je prends 5kg', //Blague 22
    'Réponse : Rennes.',//Blague 23
    'Réponse: Tous les deux vident leurs sacs dans les chambres des petits enfants.'
];

let today = new Date().getDate();

let count = 0;

//Fonction qui permet d'afficher la modal

function opened(number) {
    if (today - number > 0) { // >0 car décalage des valeurs dans le tableau
        if (count == number) {
            jokeQuestions.innerHTML = `<p>${jokesDebut[number]}</p>`;
            jokeAnswer.innerHTML = `<p>${jokesEnd[number]}</p>`;

            jokesModal.style.display = "block";
            count += 1;
        } else if (count >= number) {
            jokesModal.style.display = "block";
        } else {
            errorModal.style.display = "block";
        }
    } else {
        errorModal.style.display = "block";
    }
}



//Fonctions fléchées qui permet de contrôler les cases

day1.onclick = () => {
    opened(0);
}

day2.onclick = () => {
    opened(1);
}

day3.onclick = () => {
    opened(2);
}

day4.onclick = () => {
    opened(3);
}

day5.onclick = () => {
    opened(4);
}

day6.onclick = () => {
    opened(5);
}

day7.onclick = () => {
    opened(6);
}

day8.onclick = () => {
    opened(7);
}

day9.onclick = () => {
    opened(8);
}

day10.onclick = () => {
    opened(9);
}

day11.onclick = () => {
    opened(10);
}

day12.onclick = () => {
    opened(11);
}

day13.onclick = () => {
    opened(12);
}

day14.onclick = () => {
    opened(13);
}

day15.onclick = () => {
    opened(14);
}

day16.onclick = () => {
    opened(15);
}

day17.onclick = () => {
    opened(16);
}



day18.onclick = () => {
    opened(17);
}

day19.onclick = () => {
    opened(18);
}

day20.onclick = () => {
    opened(19);
}

day21.onclick = () => {
    opened(20);
}

day22.onclick = () => {
    opened(21);
}

day23.onclick = () => {
    opened(22);
}

day24.onclick = () => {
    opened(23);
}


// //gestion ouverture du cube

// document.getElementsByClassName('cube').addEventListener('click'), function(){
//     document.getElementsByClassName('front').toggleClass('open');
// }


