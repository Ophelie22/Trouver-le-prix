let input           = document.querySelector('#prix');
let error           = document.querySelector ('small');
let formulaire      = document.querySelector('#formulaire');

// Cacher notre message
error.style.display ='none';

// Etape 3 - Générer un nombre aléatoire
let nombreAléatoire = Math.floor (Math.random() * 1001); // on va englober notre fct Math random 
//avec Math floor pour avoir un arrondi à l'entier
let coups           = 0;
let nombreChoisi;

// Etape 6 - Créer la fonction vérifier
function verifier(nombre) {
  
    let instruction = document.createElement('div');
  
    if(nombre < nombreAleatoire) {
      // C'est plus
      instruction.textContent = "#" + coups + " ( " + nombre + " ) C'est plus !";
      instruction.className = "instruction plus";
    }
    else if(nombre > nombreAleatoire) {
      // C'est moins
      instruction.textContent = "#" + coups + " ( " + nombre + " ) C'est moins !";
      instruction.className = "instruction moins";
    }
    else {
      // Félicitations vous avez trouvé le juste prix !
      instruction.textContent = "#" + coups + " ( " + nombre + " ) Félicitations vous avez trouvé le juste prix !";
      instruction.className = "instruction fini";
      input.disabled = true;
    }
    // Ajouter l'élément devant les autres
    document.querySelector('#instructions').prepend(instruction);
  
}


// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', () =>{
if(isNaN(input.value)){//pour verifier que nombre

    // Afficher msg d'erreur
   error.style.display = "inline";
}
else{
    
    // Cacher le texte
    error.style.display = "none";
}
});

// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener('submit', (e) => {// on va recuperer (e)l'evenement et l'annuler
    e.preventDefault();
    
    if(isNaN(input.value) || input.value == ''){// ,n'est pas un nbr et n'est pas vide
       // Mettre notre bordure de formulaire en rouge (red)
      input.style.borderColor = "red";
    }
    else {
      // Mettre notre bordure de formulaire en gris (silver)
      coups++;
      input.style.borderColor = "silver";
      nombreChoisi = input.value;// je stocke ds ma variable la valeur et l declare plus haut
      input.value = '';//On va reinianiler la valeur
      verifier(nombreChoisi);
    }
  });