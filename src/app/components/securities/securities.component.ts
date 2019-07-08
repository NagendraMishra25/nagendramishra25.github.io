import { Component, OnInit } from '@angular/core';

import { Security } from '../../models/Security';

@Component({
  selector: 'app-securities',
  templateUrl: './securities.component.html',
  styleUrls: ['./securities.component.css']
})
export class SecuritiesComponent implements OnInit {
  currTime = Date.now();

  securities:Security[];

  constructor() {
    setInterval(() => {
      this.currTime = Date.now();
    }, 3000);
  }

  ngOnInit() {

  }

}
