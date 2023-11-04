import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { client, room } from '../acccueil/acccueil.component';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent {
  
  constructor(private router: Router) 
  {
    room.onStateChange((state) => this.draw(state));
  }

  draw(state)
  {
    if (state.contract == -1) // atout pas encore prix
    {
      // atout est dans state.trump
      // les cartes du joueurs sont dans state.[North ou South ou East ou West].hands
      // le tour est dans state.turn
      // score dans state.teamBlue et state.teamRed
    }
    else // manches
    {
      // les cartes du joueurs sont dans state.[North ou South ou East ou West].hands
      // cartes joues sur table sont state.chosen contenant {"North": "5D"} etc
      // cartes choisies par le joueur state.[North ou South ou East ou West].chosenCard
      // le tour est dans state.turn
      // score dans state.teamBlue et state.teamRed
      // numero de plie dans state.fold
    }

    // IMPORTANT: tu dois savoir la direction de ce joueur, soit North, South, East ou West
    // donc cherce dans state.North, state.South etc celle qui nest pas vide
    // quelque soit la direction il est toujours en bas dans le front end, et les autres sont dans la direction de la montre comme ca North -> East -> South -> West
    // celle ci n'est important que pour mettre en accent a qui est le tour dans le front
  }

  handleClick(id)
  {
    if (room.state.contract == -1)
    {
      room.send("action", {take: true}); // ou bien false pour specifier si le joueur accept l atout
    }
    else // manche
    {
      room.send("action", {chosen: id}); // la carte choisie (ou clicker)
      // moi qui gere si son tour ou non, pas de souci
      // id="5S" par exeeple
    }
  }
}
