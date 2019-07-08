import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

import { Security } from '../models/Security';
import { SecuritiesService } from '../services/securities.service';

// TODO: Replace this with your own data model type
//export interface DataTableItem {
//  name: string;
//  id: number;
//}

// securities data from server
//const Securities_DATA: Security[];

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableDataSource extends DataSource<Security> {
  data:Security[];

  constructor(private paginator: MatPaginator, private sort: MatSort, private securitiesService: SecuritiesService) {
    super();

    this.getSecuritiesData();
    setInterval(() => {
     this.getSecuritiesData();
    }, 5000);

  }

  getSecuritiesData() {
    this.securitiesService.getSecurities().subscribe(securities => {
      this.data = securities;
      console.log("hii--" + this.data);
    });
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Security[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginator's length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Security[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Security[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'accumulated_turnover': return compare(a.accumulated_turnover, b.accumulated_turnover, isAsc);
        case 'account_executive': return compare(+a.account_executive, +b.account_executive, isAsc);
        case 'daily_turnover': return compare(+a.daily_turnover, +b.daily_turnover, isAsc);
        default: return 0;
      }
    });
  }
}


/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
