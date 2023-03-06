import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartOptions } from '../view-quota/view-quota.page';

@Component({
  selector: 'ngx-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent  implements OnInit {
  @Input() chartOptions: Partial<ChartOptions> = {};
  @ViewChild("chart") chart!: ChartComponent;

  constructor() { }

  ngOnInit() { }

}
