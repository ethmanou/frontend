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
  showDialog: boolean = false;
  atout : string = "";



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
      this.atout = trump;
      // @ts-ignore
      this.player1Hand = room.state.toJSON()[this.direction].hand; // Remarque : Assurez-vous que this.playerId est correctement défini
      this.showDialog = room.state.turn === this.direction;

    } else {
      // @ts-ignore
      this.player1Hand = room.state.toJSON()[this.direction].hand; // Remarque : Assurez-vous que this.playerId est correctement défini

      this.playedCards = room.state.toJSON().table;


      this.scoreTeamBlue = room.state.teamBlueScore;
      this.scoreTeamRed = room.state.teamRedScore;

    }
  }

  handleClick(card: String )
  {
   if(room.state.turn === this.direction){
    room.send("action", {chosen: card});
  }
  }

  isPlayerTurn(): boolean {
    // Vérifiez si c'est le tour du joueur actuel (utilisez l'état de la salle Colyseus)
    if (room.state.turn === this.direction) {
      return true;
    }
    return false;
  }






  passer() {
    // Logique pour l'action "passer"
    this.showDialog = false;
    room.send("action", {take: false})
  }

  prendre() {
    // Logique pour l'action "prendre"
    this.showDialog = false;
    room.send("action", {take: true})
  }





}
