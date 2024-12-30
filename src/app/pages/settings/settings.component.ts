import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
    FormsModule
  ],
  template: `
    <div class="settings-container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>System Settings</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="settings-form">
            <mat-form-field appearance="outline">
              <mat-label>System Name</mat-label>
              <input matInput [(ngModel)]="settings.systemName">
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Admin Email</mat-label>
              <input matInput [(ngModel)]="settings.adminEmail" type="email">
            </mat-form-field>

            <div class="toggle-setting">
              <mat-slide-toggle [(ngModel)]="settings.notifications">
                Enable Email Notifications
              </mat-slide-toggle>
            </div>

            <div class="toggle-setting">
              <mat-slide-toggle [(ngModel)]="settings.darkMode">
                Dark Mode
              </mat-slide-toggle>
            </div>
          </div>
        </mat-card-content>
        <mat-card-actions>
          <button mat-raised-button color="primary" (click)="saveSettings()">
            Save Settings
          </button>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: [`
    .settings-container {
      padding: 20px;
    }

    .settings-form {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 20px 0;
    }

    .toggle-setting {
      margin: 10px 0;
    }

    mat-form-field {
      width: 100%;
    }

    mat-card-actions {
      padding: 16px;
    }
  `]
})
export class SettingsComponent {
  settings = {
    systemName: 'Form Flow Management System',
    adminEmail: 'admin@example.com',
    notifications: true,
    darkMode: false
  };

  saveSettings() {
    console.log('Settings saved:', this.settings);
    // 在這裡實現保存設置的邏輯
  }
}
