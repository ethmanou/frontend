import { Component } from '@angular/core';
import { AcccueilComponent } from './acccueil/acccueil.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Belote';
  showPlayButton = true;
  hideBeloteplay() {
    this.showPlayButton = false;
  }

}
