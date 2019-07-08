import { Component, OnInit } from '@angular/core';

import { Security } from '../../models/Security';

@Component({
  selector: 'app-securities',
  templateUrl: './securities.component.html',
  styleUrls: ['./securities.component.css']
})
export class SecuritiesComponent implements OnInit {
  date = Date.now();

  securities:Security[];

  constructor() { }

  ngOnInit() {
    this.securities = [
      {
        "accumulated_turnover": 9070951,
        "account_executive": 81753,
        "daily_turnover": 9068239
      },
      {
        "accumulated_turnover": 9098745,
        "account_executive": 15410,
        "daily_turnover": 9091744
      },
      {
        "accumulated_turnover": 9137053,
        "account_executive": 89794,
        "daily_turnover": 9131265
      },
      {
        "accumulated_turnover": 9113916,
        "account_executive": 17347,
        "daily_turnover": 9108161
      },
      {
        "accumulated_turnover": 9192240,
        "account_executive": 38088,
        "daily_turnover": 9186852
      }
    ]
  }

}
