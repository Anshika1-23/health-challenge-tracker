import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-user-chart',
  templateUrl: './user-chart.component.html',
  styleUrls: ['./user-chart.component.css']
})
export class UserChartComponent implements OnInit {
  @Input() users: any[] = [];

  chart: any;

  ngOnInit() {
    this.createChart();
  }

  createChart() {
    const labels = this.users.map(user => user.name);
    const data = this.users.map(user => user.workouts.reduce((total: number, workout: any) => total + workout.minutes, 0));

    this.chart = new Chart('userChart', {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Total Workout Minutes',
            data: data,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
