import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from './services/data-handler.service';
import {FootballClubs, FootballClubsCheck, FootballCountries} from './model/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  footballClubs: FootballClubs[];
  checkClubNew: FootballClubsCheck[] = [];
  footballCountries: FootballCountries[] = [];
  isVisibleFootballClub = true;
  isVisibleFootballCountries = false;


  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit(): void {
    this.footballCountries = this.dataHandler.getFootballCountries();
    this.footballClubs = this.dataHandler.getFootballClubs();
    for (const ch of this.footballClubs) {
      this.checkClubNew.push({
        ...ch,
        checked: true
      });
    }
  }
  public onChange(isAdd: string): void {
    if (isAdd === 'club') {
      this.isVisibleFootballClub = true;
      this.isVisibleFootballCountries = false;
    }
    if (isAdd === 'country') {
      this.isVisibleFootballClub = false;
      this.isVisibleFootballCountries = true;
    }
  }
}
