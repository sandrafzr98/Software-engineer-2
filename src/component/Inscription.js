import '../styles/Inscription.css'
import React from 'react'
function Inscription(){
    return(
        <body id="exercice1_body">
      <div id="exercice1_conteneur">
         <form name="inscription" method="post" action="#">
            <fieldset class="exercice1_fieldset">
               <legend class="exercice1_legend">Inscription</legend>
               <div class="exercice1_label">
                  Nom
               </div>
               <div class="exercice1_input">
                  <input type="text" name="nom" class="exercice1_champ" />
               </div><br />
               <div class="exercice1_label">
                  Prénom
               </div>
               <div class="exercice1_input">
                  <input type="text" name="prenom" class="exercice1_champ" />
               </div><br />
               <div class="exercice1_label">
                  Email
               </div>
               <div class="exercice1_input">
                  <input type="text" name="email" class="exercice1_champ" />
               </div><br />
               <div class="exercice1_label">
                  Mot de passe
               </div>
               <div class="exercice1_input">
                  <input type="password" name="mdp" class="exercice1_champ" />
               </div><br />
               <div class="exercice1_label">
                  Confirmer
               </div>
               <div class="exercice1_input">
                  <input type="password" name="remdp" class="exercice1_champ" />
               </div><br />
               <div class="exercice1_label">
                  
               </div>
               <div class="exercice1_input">
                  <input type="submit" name="sinscrire" value="S'inscrire" class="exercice1_champ" />
               </div><br />
            </fieldset>
         </form>
      </div>
   </body>
    )
}
export default Inscription