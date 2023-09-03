import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  ngOnInit(): void {
    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
          label: '# of Bookings',
          data: [12, 19, 3, 5, 2, 3, 6, 10, 9, 6, 9, 7],
          backgroundColor: [
            'rgba(54, 162, 235)',
            'rgba(54, 162, 235)',
            'rgba(54, 162, 235)',
            'rgba(54, 162, 235)',
            'rgba(54, 162, 235)'
          ],
          borderWidth: 0
        }]
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
