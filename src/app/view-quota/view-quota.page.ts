import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quota } from '../interfaces/quota';
import { DataService } from '../services/data.service';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-view-quota',
  templateUrl: './view-quota.page.html',
  styleUrls: ['./view-quota.page.scss'],
})
export class ViewQuotaPage implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;

  loading: boolean = false;
  public quota!: Quota[];

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute
  ) { }

  convertToDate(dateString: string) {
    let d = dateString.split("/");
    let dat = new Date(d[2] + '/' + d[1] + '/' + d[0]);
    return dat;
  }

  ngOnInit() {
    this.loading = true;
    const tag = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.data.getQuotaById(tag)
      .subscribe((quota: Quota[]) => {
        this.loading = false;
        this.quota = quota;
        this.chartOptions = {
          series: [
            {
              name: "Cotas",
              data: this.quota?.map((v: any) => v.realValue ? parseFloat(v.realValue?.replace(',','.')!) : parseFloat((v["preço médio"])?.replace(',','.')!)) as []
            }
          ],
          chart: {
            height: 350,
            type: "line"
          },
          title: {
            text: `Valor em R$ de ${tag} x Tempo`
          },
          xaxis: {
            categories: this.quota?.map((v: any) => {
              const d = this.convertToDate(v.date as string);
              return v[""] || (d.getDate()).toString().padStart(2,'0') + '/' + (d.getMonth() + 1 ).toString().padStart(2,'0');
            })
          }
        };
      });
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }
}
