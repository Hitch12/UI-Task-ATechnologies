import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  data: any;
  options: any;
  selectedOption:string = '';
  chartOptions: Array<any>=[];
  ngOnInit() {

      this.data = {
          labels: ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونيو', 'يوليو','أغسطس','سبتمبر','اكتوبر','نوفمبر','ديسمبر'].reverse(),
          datasets: [
              {
                  style:'font-family: NeoSansArabic;',
                  data: [15, 20, 17, 20, 22, 20, 20,18,18,20],
                  fill: true,
                  pointRadius:0,
                  pointHitRadius:50,
                  borderColor: '#8A74F9',// #8A74F9
                  tension: 0.5,
                  backgroundColor: 'rgba(138, 116, 249, 0.2)',

              }
          ]
      };

      this.options = {
          maintainAspectRatio: false,
          aspectRatio: 1.5,
          plugins: {
            legend: {
                labels: false
            }

        }
          // plugins: {
          //     legend: {
          //         labels: {
          //             color: textColor
          //         }
          //     }
          // },
          // scales: {
          //     x: {
          //         ticks: {
          //             color: textColorSecondary
          //         },
          //         grid: {
          //             color: surfaceBorder
          //         }
          //     },
          //     y: {
          //         ticks: {
          //             color: textColorSecondary
          //         },
          //         grid: {
          //             color: surfaceBorder
          //         }
          //     }
          // }
      };
      this.chartOptions = [
        { name: 'سنويا' },
        { name: 'شهرا' },
        { name: 'يوميا' },

    ];
  }
}
