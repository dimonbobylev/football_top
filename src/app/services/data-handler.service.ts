import { Injectable } from '@angular/core';
import {TestData} from '../data/TestData';
import {FootballClubs, FootballClubsCheck, FootballCountries} from '../model/interfaces';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  CountryFlag = '';
  clubLogo = '';
  clubSubject = new Subject<FootballClubsCheck[]>();
  priceMinSubject = new Subject<number>();
  priceMaxSubject = new Subject<number>();
  constructor() { }

  getPriceClubMax(priceMin: number, priceMax: number): void {  //  реагируем на изменение max цены
    if (priceMax <= priceMin) {
      priceMin = priceMax - 1;
      this.priceMinSubject.next(priceMin);
    }
    this.priceMaxSubject.next(priceMax);
  }
  getPriceClubMin(priceMin: number, priceMax: number): void {  //  реагируем на изменение min цены
    if (priceMin >= priceMax) {
      priceMax = priceMin + 1;
      this.priceMaxSubject.next(priceMax);
    }
    this.priceMinSubject.next(priceMin);
  }
  getClubPrice(checkClub: FootballClubsCheck[], priceMin, priceMax): void {  //  реагируем на изменение цены, меняем checkClub
    const checkNew = checkClub.filter(res => res.checked === true && res.millions <= priceMax && res.millions >= priceMin);
    this.clubSubject.next(checkNew);
  }
  getClubCheck(checkClub: FootballClubsCheck[]): void {  //  реагируем на изменение checkbox, меняем checkClub
    const checkNew = checkClub.filter(res => res.checked === true);
    this.clubSubject.next(checkNew);
  }

  getFootballClubs(): FootballClubs[] {  // выдаем все значения из TestData
    return TestData.clubs;
  }
  getFootballCountries(): FootballCountries[] {  // выдаем все значения из TestData
    return TestData.countries;
  }
  getCountryFlag(CountryFlag): string {
    this.CountryFlag = '';
    this.CountryFlag = 'assets/icon/' + CountryFlag + '.png';
    return this.CountryFlag;
  }
  getClubLogo(clubName): string {
    this.clubLogo = '';
    if (clubName === 'Barcelona') {
      this.clubLogo = 'https://football-fun.ru/uploads/teams/barselona-image-_x28.png';
    }
    if (clubName === 'Juventus') {
      this.clubLogo = 'https://football-fun.ru/uploads/teams/yuventus-image-_x28.png';
    }
    if (clubName === 'PSG') {
      this.clubLogo = 'https://football-fun.ru/uploads/teams/pszh-image-_x28.png';
    }
    if (clubName === 'Liverpool') {
      this.clubLogo = 'https://football-fun.ru/uploads/teams/liverpul-image-_x28.png';
    }
    if (clubName === 'Manchester City') {
      this.clubLogo = 'https://football-fun.ru/uploads/teams/manchester-siti-image-_x28.png';
    }
    if (clubName === 'Real Madrid') {
      this.clubLogo = 'https://football-fun.ru/uploads/teams/real-madrid-1-image-_x28.png';
    }
    if (clubName === 'Bayern') {
      this.clubLogo = 'https://football-fun.ru/uploads/teams/bavariya-image-_x28.png';
    }
    if (clubName === 'Arsenal') {
      this.clubLogo = 'https://football-fun.ru/uploads/teams/arsenal-image-_x28.png';
    }
    if (clubName === 'Manchester United') {
      this.clubLogo = 'https://football-fun.ru/uploads/teams/manchester-yunayted-image-_x28.png';
    }
    if (clubName === 'Atletico Madrid') {
      this.clubLogo = 'https://football-fun.ru/uploads/teams/atletiko-madrid-image-_x28.png';
    }
    return this.clubLogo;
  }
}
