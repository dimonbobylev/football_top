import {FootballClubs, FootballCountries} from '../model/interfaces';


export class TestData {

  static clubs: FootballClubs[] = [
    {id: 1, club: 'Bayern', country: 'ger', r2020: 25.000, r2021: 27.000, total: 134.000, millions: 842.60},
    {id: 2, club: 'Real Madrid', country: 'esp', r2020: 23.000, r2021: 26.000, total: 127.000, millions: 745.50},
    {id: 3, club: 'Manchester City', country: 'eng', r2020: 31.000, r2021: 35.000, total: 125.000, millions: 1030.00},
    {id: 4, club: 'Barcelona', country: 'esp', r2020: 23.000, r2021: 20.000, total: 122.000, millions: 823.00},
    {id: 5, club: 'Juventus', country: 'ita', r2020: 25.000, r2021: 21.000, total: 120.000, millions: 678.10},
    {id: 6, club: 'Atletico Madrid', country: 'esp', r2020: 26.000, r2021: 16.000, total: 115.000, millions: 748.00},
    {id: 7, club: 'PSG', country: 'fra', r2020: 24.000, r2021: 21.000, total: 113.000, millions: 828.95},
    {id: 8, club: 'Manchester United', country: 'eng', r2020: 20.000, r2021: 25.000, total: 112.000, millions: 717.95},
    {id: 9, club: 'Liverpool', country: 'eng', r2020: 34.000, r2021: 24.000, total: 101.000, millions: 1010.00},
    {id: 10, club: 'Arsenal', country: 'eng', r2020: 21.000, r2021: 23.000, total: 99.000, millions: 549.10},
  ];

  static countries: FootballCountries[] = [
    {id: 1, country: 'eng', r2017: 14.928, r2021: 23.928, total: 100.140},
    {id: 2, country: 'esp', r2017: 20.142, r2021: 19.357, total: 97.712},
    {id: 3, country: 'ita', r2017: 14.250, r2021: 16.285, total: 75.438},
    {id: 4, country: 'ger', r2017: 14.571, r2021: 15.214, total: 73.570},
    {id: 5, country: 'fra', r2017: 14.416, r2021: 7.916, total: 56.081},
    {id: 6, country: 'por', r2017: 8.083, r2021: 9.600, total: 48.549},
    {id: 7, country: 'nld', r2017: 9.100, r2021: 9.200, total: 39.200},
    {id: 8, country: 'rus', r2017: 9.200, r2021: 4.333, total: 38.382},
    {id: 9, country: 'bel', r2017: 12.500, r2021: 6.000, total: 36.500},
    {id: 10, country: 'aut', r2017: 7.375, r2021: 6.700, total: 35.825},
  ];
}
