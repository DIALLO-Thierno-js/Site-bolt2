import React from 'react';
import './App.css';
import Bouton from '../../Composants/Acceuil/Bouton';

function App() {
  return (
    <div>
      <div className="arriere-plan">
        <div className='menu-principale'>
          <h1 className='logo'>Bolt</h1>
          <div className='lien-menu-principal'>
            <Bouton text=" FR" />
            <Bouton text=" support" />
            <button className='bouton-special'>s'inscrire</button>
            <div class="menu-icon">
              <div></div>
              <div></div>
              <div></div>
            </div>


          </div>


        </div>
        <div>
          <div className='gauche'>
            <h1>Allez n’importe où en France, à n’importe quelle heure</h1>
            <p>Bolt est l'application de mobilité tout-en-un. En quelques minutes,
              vous êtes pris en charge par un chauffeur offrant un service de transport
              de premier ordre et profitez d'un trajet confortable jusqu'à votre destination.
              Sinon, évitez complètement les embouteillages grâce à l'une de nos trottinettes
              leaders sur le marché.</p>
              <button className='bouton-special2'>Télécharger l'appli</button>
          </div>
          <div className='droite'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
