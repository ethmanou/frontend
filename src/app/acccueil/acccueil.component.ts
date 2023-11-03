import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'colyseus.js';

export const client = new Client('ws://10.50.50.6:2567');
export let room: any;

@Component({
  selector: 'app-acccueil',
  templateUrl: './acccueil.component.html',
  styleUrls: ['./acccueil.component.css']
})
export class AcccueilComponent {
  username: string = '';

  constructor(private router: Router) {
    // Initialize the client here with your server URL
  }

  async handleClick() {
    room = await client.joinOrCreate('Belote');
    this.router.navigate(['session'], { queryParams: { username: this.username } });
  }
}
