import {Component, Input, OnInit} from '@angular/core';
import {Club, FootballClubsCheck} from '../../../model/interfaces';
import {DataHandlerService} from '../../../services/data-handler.service';


@Component({
  selector: 'app-check-club',
  templateUrl: './check-club.component.html',
  styleUrls: ['./check-club.component.css']
})
export class CheckClubComponent implements OnInit {

  @Input() checkClub: FootballClubsCheck[];
  allChecked: boolean = true;
  club: Club = {
    name: 'AllClubs',
    completed: true,
  };
  constructor(private dataHandler: DataHandlerService) { }

  ngOnInit(): void {
  }
  updateAllChecked(): void {
    this.allChecked = this.checkClub != null && this.checkClub.every(t => t.checked);
  }

  someComplete(): boolean {
    if (this.checkClub == null) {
      return false;
    }
    return this.checkClub.filter(t => t.checked).length > 0 && !this.allChecked;
  }

  setAll(checked: boolean): void {
    this.allChecked = checked;
    if (this.checkClub == null) {
      return;
    }
    this.checkClub.forEach(t => t.checked = checked);
    this.dataHandler.getClubCheck(this.checkClub);
  }

  clickCheckBox(): void {  //  событие клика происходит раньше, чем изменение checked с true на false
    setTimeout(() => {  //   поэтому выставляем setTimeout и вызываем getClubCheck
      this.dataHandler.getClubCheck(this.checkClub);
    },50);
  }

}
