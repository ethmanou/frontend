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

  }

  onClick()
  {
    
  }
}
