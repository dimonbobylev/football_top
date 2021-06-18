export interface FootballClubs {
  id: number;
  club: string;
  country: string;
  r2020: number;
  r2021: number;
  total: number;
  millions: number;
}
export interface FootballClubsCheck extends FootballClubs {
  checked?: boolean;
}
export interface Club {
  name: string;
  completed: boolean;
  clubs?: Club[];
}
export interface FootballCountries {
  id: number;
  country: string;
  r2017: number;
  r2021: number;
  total: number;
}


