import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FootballClubsCheck} from '../../model/interfaces';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() checkClub: FootballClubsCheck[];
  @Output() buttonClick = new EventEmitter();
  checkBoxClub = false;
  sliderPrice = false;
  clubClick = true;
  countriesClick = false;

  constructor() { }

  ngOnInit(): void { }

  buttonClubClick(): void {
    this.buttonClick.emit('club');
    this.clubClick = true;
    this.countriesClick = false;
  }
  buttonCountriesClick(): void {
    this.buttonClick.emit('country');
    this.clubClick = false;
    this.countriesClick = true;
  }
}
