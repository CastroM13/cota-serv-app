import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quota } from '../interfaces/quota';
import { DataService } from '../services/data.service';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexYAxis
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
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
  predictedValues = ["preço médio", "centavos r$/lp", "valor r$ ", "5 dias", "r$/litro", "valor r$", "valor r$/t", "r$/kg vivo", "branco", "valorvista", "valor r$/kg", "valor r$/t*"];
  loading: boolean = false;
  tag = '';
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

  findName(v: Quota): string {
    return Object.keys(v).find(i => this.predictedValues.includes(i))!
  }

  ngOnInit() {
    this.loading = true;
    this.tag = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.data.getQuotaById(this.tag)
      .subscribe((quota: Quota[]) => {
        this.loading = false;
        this.quota = quota;
        this.chartOptions = {
          series: [
            {
              name: "Cotas",
              data: (this.quota?.map((v: any) => v.realValue ? parseFloat(v.realValue?.replace(',', '.')!) : parseFloat((v[this.findName(v)])?.replace(',', '.')!)) as []).slice(0, 6)
            }
          ],
          chart: {
            height: 350,
            type: "line",
            toolbar: {
              show: false
            }
          },
          yaxis: {
            labels: {
              style: {
                fontSize: '22px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 400,
              },
            },
          }, 
          xaxis: {
            labels: {
              style: {
                colors: 'white',
                fontSize: '12px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 400,
              },
            },
            categories: this.quota?.map((v: any) => {
              const d = this.convertToDate((v.date || v[""]) as string);
              return (d.getDate()).toString().padStart(2, '0') + '/' + (d.getMonth() + 1).toString().padStart(2, '0');
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
