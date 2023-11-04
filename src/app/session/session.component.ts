import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { client, room } from '../acccueil/acccueil.component';
import { state, style, transition, trigger, animate } from '@angular/animations';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css'],
  animations: [
    trigger('hideAnimation', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        animate('0.5s', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
      transition(':leave', [
        animate('0.5s', style({ transform: 'translateX(100px)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class SessionComponent implements OnInit {
  //playerHands: PlayerHand[] = [];
  playerId: string = "north";
  player1Hand: string[] = []; // Déclarez les cartes de la main du joueur 1
  player2Hand: string[] = []; // Déclarez les cartes de la main du joueur 2
  player3Hand: string[] = []; // Déclarez les cartes de la main du joueur 3
  player4Hand: string[] = []; // Déclarez les cartes de la main du joueur 4
  playedCards: string[] = [];

  constructor() {}

  ngOnInit() {
    this.player1Hand = ['7H', '8P', 'AP', 'QC', '10T'];
    this.player2Hand = ['6H', '7P', '9P', 'KT', '7C'];
    this.player3Hand = ['10H', 'KP', '8T', 'A', '9C'];
    this.player4Hand = ['AH', '10P', '7T', '9T', '10C'];
    //this.playedCard = '7H';
  }

  selectCard(card: string, playerHand: string[]) {
    const cardIndex = playerHand.indexOf(card);
    if (cardIndex !== -1) {
      // La carte a été trouvée dans la main du joueur
      const selectedCard = playerHand.splice(cardIndex, 1)[0];
      // Ajoutez la carte au tableau des cartes déjà jouées
      
      if (this.playedCards.length < 4) {
        // Ajoutez la carte jouée au tableau des cartes jouées
        this.playedCards.push(selectedCard);
      }
    }
  }
  
}
