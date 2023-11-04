import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { client, room } from '../acccueil/acccueil.component';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent {
  northHand: any;
  southHand: any;
  eastHand: any;
  westHand: any;
  http: any;
  room: any;
  constructor(private router: Router) 
  {
    this.room = client.join('your_room_name');
    this.room.onStateChange((state: { North: { hand: any; }; South: { hand: any; }; East: { hand: any; }; West: { hand: any; }; }) => {
      this.northHand = state.North.hand;
      this.southHand = state.South.hand;
      this.eastHand = state.East.hand;
      this.westHand = state.West.hand;
    });

    room.onMessage('your_message_type', (message: { type: string; }) => {
      // Handle specific message types
      // Example handling:
      if (message.type === 'game_start') {
        console.log('The game has started!');
      } else if (message.type === 'game_end') {
        console.log('The game has ended!');
      }
      // Add more custom message handling as needed
    });
    const onClick = (chosenCard: any) => {
      // Send the chosen card to the server
      room.send('card_chosen', { card: chosenCard });
    };
  
  }
  
}
