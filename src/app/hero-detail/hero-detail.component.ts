import { Component, OnInit, Input, Output } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  //yourgender: string;
  genders: string[] = ['   M  ', '   F  ', '   O   '];

  constructor() { }

  ngOnInit(): void {
  }

}
