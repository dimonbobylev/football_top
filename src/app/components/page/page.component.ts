import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {FootballClubsCheck} from '../../model/interfaces';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {DataHandlerService} from '../../services/data-handler.service';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit, AfterViewInit {

  // поля для таблицы (те, что отображают данные из задачи - должны совпадать с названиями переменных класса)
  displayedColumns: string[] = ['id', 'club', 'country', 'r2020', 'r2021', 'total', 'millions'];
  dataSource: MatTableDataSource<FootballClubsCheck>; // контейнер - источник данных для таблицы
  priceClubMax;
  priceClubMin;

  @Input() footballClubsChecks: FootballClubsCheck[];
  @ViewChild(MatPaginator, {static: false}) private paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) private sort: MatSort;

  constructor(private dataHandler: DataHandlerService) {
    this.dataSource = new MatTableDataSource(this.footballClubsChecks);
  }

  ngOnInit(): void {
    this.dataSource.data = this.footballClubsChecks;  //  выставляем первоначальное значение для MatTable
    this.dataHandler.clubSubject.subscribe(checkClub => {  //  подписываемся на изменение checkbox
      this.footballClubsChecks = checkClub;
      this.dataSource.data = this.footballClubsChecks;
    });
    this.dataHandler.priceMaxSubject.subscribe(priceMax => {
      this.priceClubMax = priceMax;
      // console.log('min: ', this.priceClubMin, 'max: ', this.priceClubMax);
    });
    this.dataHandler.priceMinSubject.subscribe(priceMin => {
      this.priceClubMin = priceMin;
      // console.log('page_min: ', this.priceClubMin, 'page_max: ', this.priceClubMax);
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort; // компонент для сортировки данных (если необходимо)
    this.dataSource.paginator = this.paginator; // обновить компонент постраничности (кол-во записей, страниц)
  }
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
