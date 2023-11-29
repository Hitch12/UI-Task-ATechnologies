import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  checked: boolean = true;
  pagesOptions = [
    { Count: '10' },
    { Count: '20' },
    { Count: '30' },

];
  customers:Array<any> =[
    {
      name:'أحمد محمود',
      phone: '0123456789',
      numTacket:'C-101',
      priceTacket:40,
      locations:['سينما مصر ','مول العرب ','برج الأطنان ','سرايا القبة ','صيدناوي مول ','برج العرب '].slice(0,4),
      subLocations:['سينما مصر ','مول العرب ','برج الأطنان ','سرايا القبة ','صيدناوي مول ','برج العرب '].slice(4),
      numPeople:1,
      numPurchases:'مره واحدة',
      tacketPDF:'',
      image:''
    },
    {
      name:'أحمد محمود',
      phone: '0123456789',
      numTacket:'C-101',
      priceTacket:40,
      locations:['سينما مصر ','مول العرب ','برج الأطنان ','سرايا القبة ','صيدناوي مول ','برج العرب '].slice(0,4),
      subLocations:['سينما مصر ','مول العرب ','برج الأطنان ','سرايا القبة ','صيدناوي مول ','برج العرب '].slice(4),
      numPeople:1,
      numPurchases:'مره واحدة',
      tacketPDF:'',
      image:''
    },
    {
      name:'أحمد محمود',
      phone: '0123456789',
      numTacket:'C-101',
      priceTacket:40,
      locations:['سينما مصر ','مول العرب ','برج الأطنان ','سرايا القبة ','صيدناوي مول ','برج العرب '].slice(0,4),
      subLocations:['سينما مصر ','مول العرب ','برج الأطنان ','سرايا القبة ','صيدناوي مول ','برج العرب '].slice(4),
      numPeople:1,
      numPurchases:'مره واحدة',
      tacketPDF:'',
      image:''
    },
    {
      name:'أحمد محمود',
      phone: '0123456789',
      numTacket:'C-101',
      priceTacket:40,
      locations:['سينما مصر ','مول العرب ','برج الأطنان ','سرايا القبة ','صيدناوي مول ','برج العرب '].slice(0,4),
      subLocations:['سينما مصر ','مول العرب ','برج الأطنان ','سرايا القبة ','صيدناوي مول ','برج العرب '].slice(4),
      numPeople:1,
      numPurchases:'مره واحدة',
      tacketPDF:'',
      image:''
    },

  ]

  ngOnInit() {
}
}
