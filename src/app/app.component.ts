import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatBadgeModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '表單流程管理系統';

  ngOnInit() {
    setTimeout(() => {
      this.initializeCharts();
    }, 100);
  }

  private initializeCharts() {
    // 選擇類型分布圖表
    const typeCtx = document.getElementById('typeDistribution') as HTMLCanvasElement;
    if (typeCtx) {
      new Chart(typeCtx, {
        type: 'pie',
        data: {
          labels: ['選項A', '選項B', '選項C', '選項D'],
          datasets: [{
            data: [30, 25, 25, 20],
            backgroundColor: [
              '#4a90e2',
              '#50c878',
              '#f39c12',
              '#e74c3c'
            ]
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'right'
            }
          }
        }
      });
    }

    // 客戶分群分析圖表
    const segmentCtx = document.getElementById('customerSegmentation') as HTMLCanvasElement;
    if (segmentCtx) {
      new Chart(segmentCtx, {
        type: 'bar',
        data: {
          labels: ['短期用戶', '中期用戶', '長期用戶'],
          datasets: [{
            label: '用戶數量',
            data: [300, 450, 250],
            backgroundColor: '#4a90e2'
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }
}
