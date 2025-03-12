import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-capacitacion',
  standalone: false,
  templateUrl: './capacitacion.component.html'
})
export class CapacitacionComponent {
  public barChartOptions: ChartConfiguration['options'] = {
    scales: { x: {}, y: { min: 0 } },
    plugins: { legend: { display: true } }
  };
  public barChartLabels = ['Productividad', 'Retención', 'Bienestar'];
  public barChartType = 'bar';
  public barChartData = {
    labels: this.barChartLabels,
    datasets: [
      { data: [65, 59, 70], label: 'Antes' },
      { data: [85, 80, 90], label: 'Después' }
    ]
  };
}