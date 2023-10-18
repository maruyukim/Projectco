import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-expense-chart',
  templateUrl: './expense-chart.component.html',
  styleUrls: ['./expense-chart.component.scss']
})
export class ExpenseChartComponent implements OnInit {
  chart: any;

  constructor() { }

  ngOnInit(): void {
    this.chart = new Chart('myChart', {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Expenses',
          data: [1,1,1,1,1,1,1,1,1,1,1,1],
          borderColor: '#3cba9f',
          fill: false
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            min: -1.0,
            max: 1.0,
            ticks: {
              stepSize: 0.5
            }
          }
        }
      }
      
    });
  }
}
