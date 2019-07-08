import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataTableDataSource } from './data-table-datasource';
import { SecuritiesService } from '../services/securities.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: DataTableDataSource;
  counter=0;
 
  constructor(private securitiesService: SecuritiesService) { }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['index', 'accumulated_turnover', 'account_executive', 'daily_turnover'];

  ngAfterViewInit() {
    this.dataSource = new DataTableDataSource(this.paginator, this.sort, this.securitiesService);
  }
}
