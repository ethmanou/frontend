import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
   constructor(private route: ActivatedRoute){}
  ngOnInit(): void {
    const num: string|null=this.route.snapshot.paramMap.get('accueil');
     
   }
}
