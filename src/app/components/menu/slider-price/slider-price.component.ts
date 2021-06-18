import {Component, Input, OnInit} from '@angular/core';
import {DataHandlerService} from '../../../services/data-handler.service';
import {FootballClubsCheck} from '../../../model/interfaces';

@Component({
  selector: 'app-slider-price',
  templateUrl: './slider-price.component.html',
  styleUrls: ['./slider-price.component.css']
})
export class SliderPriceComponent implements OnInit {

  @Input() checkClub: FootballClubsCheck[];
  //   переменные для mat-slider
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  valueMin = 0;
  valueMax = 5000;
  tickInterval = 1;

  constructor(private dataHandler: DataHandlerService) { }

  ngOnInit(): void {
    let maxM = 0;
    let minM = 100000;
    for (const club of this.checkClub) {
      if (maxM < club.millions) {
        maxM = +club.millions.toFixed();
      }
      if (minM > club.millions) {
        minM = +club.millions.toFixed();
      }
    }
    this.max = this.valueMax = maxM;
    this.min = this.valueMin = minM;
    this.dataHandler.priceMaxSubject.subscribe(priceMax => this.valueMax = priceMax);
    this.dataHandler.priceMinSubject.subscribe(priceMin => this.valueMin = priceMin);
  }

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }
    return 0;
  }

  changeMaxPrice(): void {  //  срабатывает при изменении полей input и slider max значения
    this.dataHandler.getPriceClubMax(this.valueMin, this.valueMax);
    this.dataHandler.getClubPrice(this.checkClub, this.valueMin, this.valueMax);
  }

  changeMinPrice(): void {  // срабатывает при изменении полей input и slider min значения
    this.dataHandler.getPriceClubMin(this.valueMin, this.valueMax);
    this.dataHandler.getClubPrice(this.checkClub, this.valueMin, this.valueMax);
  }

}
