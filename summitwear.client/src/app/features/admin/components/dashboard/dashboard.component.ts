import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.createCharts();
  }

  createCharts() {
    // Sales Chart
    new Chart('salesChart', {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Sales ($)',
          data: [5000, 8000, 6000, 9000, 12000, 15000],
          borderColor: '#4F46E5',
          backgroundColor: 'rgba(79, 70, 229, 0.2)',
          borderWidth: 2,
          fill: true
        }]
      }
    });

    // User Growth Chart
    new Chart('userChart', {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'New Users',
          data: [50, 100, 150, 200, 250, 300],
          backgroundColor: '#10B981'
        }]
      }
    });
  }

}
