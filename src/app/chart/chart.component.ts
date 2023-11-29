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
                label: 'استخدام',
                  style:'font-family: NeoSansArabic;',
                  data: [15, 20, 18, 20, 18, 18, 20,18,18,20,16,16],
                  fill: true,
                  pointRadius:0,
                  pointHitRadius:50,
                  borderColor: '#8A74F9',
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
                labels: false,

            // scales: {
            //   },
            //   x: [{
            //     ticks: {
            //         font: {
            //             family: 'Arial', // Change the font family
            //             size: 18,       // Change the font size
            //             style: 'italic', // Change the font style (normal, italic, or oblique)
            //             weight: 'bold'   // Change the font weight (normal, bold, bolder, lighter, or a numeric value)
            //         }
            //     }
            // }],
            //   y: {
            //     grid: {
            //         display: false // Hide horizontal lines
            //     },
            //     ticks: {
            //         display: false // Hide tick marks
            //     }
            // }
          }



        }

      };
      this.chartOptions = [
        { name: 'سنويا' },
        { name: 'شهرا' },
        { name: 'يوميا' },

    ];
  }
}
