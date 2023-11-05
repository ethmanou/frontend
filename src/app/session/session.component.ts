import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { client, room } from '../acccueil/acccueil.component';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent {

  playerId: string = "south";
  player1Hand: string[] = []; // Déclarez les cartes de la main du joueur 1
  direction: String = "";
  playedCards: string[] = [];
  scoreTeamBlue: number | undefined ;
  scoreTeamRed: number | undefined;


  constructor(private router: Router)
  {

    

    room.state.onChange((state: any) => this.draw(state));
    
    
  }
  

  team(dir: string)
  {
      if (dir === "North" || dir === "South")
        return 0;
      else
        return 1;
  }

  // Fonction pour gérer l'affichage en fonction de l'état du jeu
  draw(state: any) {
    if(Object.values(room.state.toJSON()["North"]).length != 0)
      this.direction = "North";
    if(Object.values(room.state.toJSON()["South"]).length != 0)
      this.direction = "South";
    if(Object.values(room.state.toJSON()["East"]).length != 0)
      this.direction = "East";
    if(Object.values(room.state.toJSON()["West"]).length != 0)
      this.direction = "West";

    if (room.state.toJSON().contract === -1) {
      // Atout pas encore choisi
      const trump = room.state.toJSON().trump;
      // @ts-ignore
      this.player1Hand = room.state.toJSON()[this.direction].hand; // Remarque : Assurez-vous que this.playerId est correctement défini

      // Gérer l'affichage en fonction de cette situation
    } else {
      // Manche en cours
      this.player1Hand = room.state.this.direction.hands; // Remarque : Assurez-vous que this.playerId est correctement défini
      console.log(room.state.North);
      const chosenCards = room.state.chosen;
      const playerChosenCard = room.state[this.playerId].chosenCard;
      const turn = room.state.turn;
      this.scoreTeamBlue = room.state.teamBlue;
      this.scoreTeamRed = room.state.teamRed;
      this.playedCards = room.state.chosen.map((x: any) => Object.values(x)[0]);
      console.log("la carte choisi :" , this.playedCards);
      
      // Gérer l'affichage en fonction de cette situation
    }
  }

  handleClick(card: String )
  {
   room.send("action", {chosen: card}); // la carte choisie (ou clicker)
  }

  
}
