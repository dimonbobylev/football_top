import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {FootballCountries} from '../../model/interfaces';
import {MatTableDataSource} from '@angular/material/table';
import {DataHandlerService} from '../../services/data-handler.service';

@Component({
  selector: 'app-page-countries',
  templateUrl: './page-countries.component.html',
  styleUrls: ['./page-countries.component.css']
})
export class PageCountriesComponent implements OnInit, AfterViewInit {

  // поля для таблицы (те, что отображают данные из задачи - должны совпадать с названиями переменных класса)
  displayedColumns: string[] = ['id', 'country', 'r2017', 'r2021', 'total'];
  dataSource: MatTableDataSource<FootballCountries>; // контейнер - источник данных для таблицы
  footballCountriesTop: FootballCountries[] = [];

  // ссылки на компоненты таблицы
  @ViewChild(MatPaginator, {static: false}) private paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) private sort: MatSort;
  @Input() footballCountries: FootballCountries[];

  constructor(private dataHandler: DataHandlerService) {
    this.dataSource = new MatTableDataSource(this.footballCountries);
  }

  ngOnInit(): void {
    this.dataSource.data = this.footballCountries;  //  выставляем первоначальное значение для MatTable
  }
  // в этом методе уже все проинциализировано, поэтому можно присваивать объекты (иначе может быть ошибка undefined)
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
