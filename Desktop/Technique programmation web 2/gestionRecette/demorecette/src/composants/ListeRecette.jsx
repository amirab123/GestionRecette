import { useState } from "react";
import recettesData from './listeRecettes';

import './ListeRecette.css';
function ListeRecettes() {
const [recettes] = useState(recettesData);
  const [categorieFiltre, setCategorieFiltre] = useState('');
  const [recetteActive, setRecetteActive] = useState(null);

  const filtrerParCategorie = (categorie) => {
    setCategorieFiltre(categorie);
    setRecetteActive(null); // remet à zéro la sélection
  };

const recettesFiltrees = categorieFiltre
  ? recettes.filter((recette) => recette.categorie.toLowerCase() === categorieFiltre.toLowerCase())
  : recettes;

  const handleSelection = (recette) => {
    setRecetteActive(recette);
  };

  return (
    <div>
      <h2>Liste des recettes</h2>

      <div className="boutons-filtre">
        <button onClick={() => filtrerParCategorie('')} className="btn-filtre">Tout afficher</button>
        <button onClick={() => filtrerParCategorie('Entrée')} className="btn-filtre">Entrée</button>
        <button onClick={() => filtrerParCategorie('Plat principal')} className="btn-filtre">Plat principal</button>
        <button onClick={() => filtrerParCategorie('Dessert')} className="btn-filtre">Dessert</button>
      </div>

      <ul className="liste-recettes">
        {recettesFiltrees.map((recette) => (
          <li
            key={recette.id}
            className={`element-recette ${recetteActive?.id === recette.id ? 'active' : ''}`}
          >
           <button
  className="btn-recette"
  onClick={() => handleSelection(recette)}
  title={`Voir les détails de ${recette.nom}`}
>
  {recette.nom}
</button>
          </li>
        ))}
      </ul>

      {recetteActive && (
        <div className="details-recette ">
          <h3>{recetteActive.nom}</h3>
          <img src={recetteActive.photo} alt={recetteActive.nom} style={{ maxWidth: '300px', borderRadius: '10px' }} />
          <p><strong>Catégorie :</strong> {recetteActive.categorie}</p>
          <p><strong>Difficulté :</strong> {recetteActive.difficulte}</p>
          <p><strong>Temps de préparation :</strong> {recetteActive.temps} minutes</p>

          <h4>Ingrédients :</h4>
          <ul>
            {recetteActive.ingredients.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <h4>Instructions :</h4>
          <ol>
            {recetteActive.instructions.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

export default ListeRecettes