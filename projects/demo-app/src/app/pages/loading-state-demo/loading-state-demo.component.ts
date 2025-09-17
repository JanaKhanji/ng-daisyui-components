import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoadingStateComponent } from 'ng-shared-components';

@Component({
  selector: 'app-loading-state-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, LoadingStateComponent],
  template: `
    <div class="container mx-auto p-8">
      <h1 class="text-4xl font-bold mb-8 text-center">Loading State Component Demo</h1>
      
      <!-- Controls Section -->
      <div class="mb-8 p-6">
        <h2 class="text-2xl font-semibold mb-4">Controls</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium mb-2">Loading Type</label>
            <select 
              [(ngModel)]="selectedType"
              class="select w-full"
            >
              <option value="spinner">Spinner</option>
              <option value="dots">Dots</option>
              <option value="bars">Bars</option>
            </select>
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-2">Custom Message</label>
            <input 
              type="text" 
              [(ngModel)]="customMessage"
              placeholder="Enter custom loading message..."
              class="input w-full"
            >
          </div>
        </div>
        
        <div class="mt-4 flex flex-wrap gap-2">
          <button 
            (click)="clearMessage()"
            class="btn btn-secondary"
          >
            Clear Message
          </button>
          <button 
            (click)="setRandomMessage()"
            class="btn btn-primary"
          >
            Random Message
          </button>
          <button 
            (click)="resetAll()"
            class="btn btn-error"
          >
            Reset All
          </button>
        </div>
      </div>

      <!-- Demo Sections -->
        <!-- Interactive Demo -->
        <div class="border border-gray-200 rounded-lg p-6">
          <h3 class="text-lg font-semibold mb-4">Interactive Demo</h3>
          <ng-loading-state 
            [type]="selectedType"
            [message]="customMessage"
          ></ng-loading-state>
        </div>
      <!-- Current State Info -->
      <div class="mt-8 p-4 bg-base-100">
        <h3 class="font-semibold mb-2">Current Configuration:</h3>
        <div class="text-sm space-y-1">
          <p><strong>Type:</strong> {{ selectedType }}</p>
          <p><strong>Message:</strong> {{ customMessage || 'Default message' }}</p>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class LoadingStateDemoComponent {
  selectedType: 'spinner' | 'dots' | 'bars' = 'spinner';
  customMessage: string = '';

  private randomMessages = [
    'Loading your data...',
    'Please wait while we process your request...',
    'Fetching information...',
    'Almost there...',
    'Processing...',
    'Loading content...',
    'Please be patient...',
    'Working on it...'
  ];

  clearMessage(): void {
    this.customMessage = '';
  }

  setRandomMessage(): void {
    const randomIndex = Math.floor(Math.random() * this.randomMessages.length);
    this.customMessage = this.randomMessages[randomIndex];
  }

  resetAll(): void {
    this.selectedType = 'spinner';
    this.customMessage = '';
  }
} 