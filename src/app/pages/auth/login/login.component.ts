import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="login-page">
      <div class="login-container">
        <h1>冒險者的旅程</h1>
        <div class="form-group">
          <input 
            type="text" 
            [(ngModel)]="username" 
            placeholder="請輸入你的名字" 
            class="form-control"
            (keyup.enter)="startAdventure()"
          >
        </div>
        <button 
          (click)="startAdventure()" 
          class="start-btn" 
          [disabled]="!username.trim() || isLoading"
        >
          {{ isLoading ? '準備中...' : '開始冒險' }}
        </button>
      </div>
    </div>
  `,
  styles: [`
    .login-page {
      width: 100%;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #303136;
      color: #A1B0B8;
    }

    .login-container {
      width: 90%;
      max-width: 400px;
      padding: 2rem;
      text-align: center;
      background: rgba(161, 176, 184, 0.1);
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(161, 176, 184, 0.2);
    }

    h1 {
      margin-bottom: 1.5rem;
      font-size: clamp(1.8rem, 5vw, 2.5rem);
      color: #A1B0B8;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .form-group {
      margin: 1.5rem 0;
    }

    .form-control {
      width: 100%;
      padding: 0.8rem;
      border: 2px solid rgba(161, 176, 184, 0.3);
      border-radius: 8px;
      background: rgba(48, 49, 54, 0.8);
      color: #A1B0B8;
      font-size: 1rem;
      transition: all 0.3s ease;

      &:focus {
        outline: none;
        border-color: #FE894B;
        box-shadow: 0 0 8px rgba(254, 137, 75, 0.4);
      }

      &::placeholder {
        color: rgba(161, 176, 184, 0.6);
      }
    }

    .start-btn {
      width: 100%;
      background: #FE894B;
      color: #303136;
      padding: 0.8rem;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-size: 1.1rem;
      font-weight: bold;
      transition: all 0.3s ease;
      text-transform: uppercase;
      letter-spacing: 1px;

      &:hover {
        background: darken(#FE894B, 10%);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(254, 137, 75, 0.3);
      }

      &:disabled {
        background: rgba(254, 137, 75, 0.5);
        cursor: not-allowed;
        transform: none;
        box-shadow: none;
      }

      &:active {
        transform: translateY(1px);
      }
    }

    @media (max-width: 480px) {
      .login-container {
        padding: 1.5rem;
      }

      h1 {
        font-size: 1.8rem;
      }

      .form-control {
        font-size: 1rem;
        padding: 0.7rem;
      }

      .start-btn {
        font-size: 1rem;
        padding: 0.7rem;
      }
    }
  `]
})
export class LoginComponent {
  username: string = '';
  isLoading: boolean = false;

  constructor(private router: Router) {}

  async startAdventure() {
    if (!this.username.trim()) return;

    this.isLoading = true;
    console.log('Starting adventure...');

    try {
      // 儲存用戶名到 localStorage
      localStorage.setItem('adventurer_name', this.username.trim());
      
      // 延遲一下以展示加載狀態
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // 導航到冒險頁面
      await this.router.navigate(['/adventure'], {
        state: { username: this.username.trim() }
      });
      
      console.log('Navigation successful');
    } catch (error) {
      console.error('Navigation failed:', error);
      this.isLoading = false;
    }
  }
}
