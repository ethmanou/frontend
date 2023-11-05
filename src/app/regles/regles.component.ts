import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './regles.component.html',
  styleUrls: ['./regles.component.css']
})
export class ReglesComponent implements OnInit {

  showVideo = false;

  constructor() { }

  ngOnInit(): void {
  }

  playVideo() {
    this.showVideo = true;
  }

}
