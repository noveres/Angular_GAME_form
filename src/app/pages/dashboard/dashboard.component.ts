import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  template: `
    <div class="dashboard-container">
      <div class="dashboard-header">
        <h1>歡迎回來，管理員</h1>
        <p>這是您的系統概覽</p>
      </div>
      
      <div class="dashboard-cards">
        <mat-card class="dashboard-card">
          <mat-card-header>
            <mat-card-title>用戶總數</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="card-content">
              <mat-icon>people</mat-icon>
              <span class="card-value">1,234</span>
            </div>
            <div class="card-footer">
              <span class="trend positive">
                <mat-icon>trending_up</mat-icon>
                +12%
              </span>
              較上月
            </div>
          </mat-card-content>
        </mat-card>

        <mat-card class="dashboard-card">
          <mat-card-header>
            <mat-card-title>活躍表單</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="card-content">
              <mat-icon>description</mat-icon>
              <span class="card-value">56</span>
            </div>
            <div class="card-footer">
              <span class="trend positive">
                <mat-icon>trending_up</mat-icon>
                +5%
              </span>
              較上月
            </div>
          </mat-card-content>
        </mat-card>

        <mat-card class="dashboard-card">
          <mat-card-header>
            <mat-card-title>待處理任務</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="card-content">
              <mat-icon>assignment</mat-icon>
              <span class="card-value">23</span>
            </div>
            <div class="card-footer">
              <span class="trend negative">
                <mat-icon>trending_down</mat-icon>
                -8%
              </span>
              較上月
            </div>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-container {
      padding: 24px;
    }
    
    .dashboard-header {
      margin-bottom: 32px;
    }

    .dashboard-header h1 {
      font-size: 28px;
      font-weight: 500;
      color: #1976d2;
      margin: 0;
    }

    .dashboard-header p {
      color: #666;
      margin: 8px 0 0 0;
    }
    
    .dashboard-cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 24px;
    }
    
    .dashboard-card {
      height: auto;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .dashboard-card:hover {
      transform: translateY(-4px);
    }
    
    mat-card-header {
      padding: 16px;
      border-bottom: 1px solid #eee;
    }

    mat-card-title {
      font-size: 18px;
      font-weight: 500;
      color: #333;
    }
    
    .card-content {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
      gap: 16px;
    }
    
    .card-value {
      font-size: 36px;
      font-weight: 600;
      color: #1976d2;
    }
    
    mat-icon {
      transform: scale(1.5);
      color: #1976d2;
    }

    .card-footer {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 0 16px 16px;
      color: #666;
      font-size: 14px;
    }

    .trend {
      display: flex;
      align-items: center;
      gap: 4px;
      font-weight: 500;
    }

    .trend mat-icon {
      transform: scale(0.8);
    }

    .trend.positive {
      color: #4caf50;
    }

    .trend.negative {
      color: #f44336;
    }

    .trend mat-icon {
      color: inherit;
    }

    @media (max-width: 768px) {
      .dashboard-container {
        padding: 16px;
      }

      .dashboard-header h1 {
        font-size: 24px;
      }

      .card-value {
        font-size: 28px;
      }
    }
  `]
})
export class DashboardComponent {}
