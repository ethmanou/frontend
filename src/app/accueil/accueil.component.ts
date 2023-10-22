import { Component } from '@angular/core';
import { User } from '../user';
import { Bar } from '../bar';
import { PlayComponent } from '../play/play.component';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})


export class AccueilComponent {
  title = 'Belote';
  showPlayButton = true;
  User:User={
    Username:'',
  }
  hideBeloteplay() {
    this.showPlayButton = false;
  }
  
}
