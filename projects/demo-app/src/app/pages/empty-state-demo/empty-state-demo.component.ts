import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmptyStateComponent } from 'ng-shared-components';

@Component({
  selector: 'app-empty-state-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, EmptyStateComponent],
  template: `
    <div class="container mx-auto p-8">
      <h1 class="text-4xl font-bold mb-8 text-center">Empty State Component Demo</h1>
      
      <!-- Controls Section -->
      <div class="mb-8 p-6">
        <h2 class="text-2xl font-semibold mb-4">Controls</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium mb-2">Search Term</label>
            <input 
              type="text" 
              [(ngModel)]="searchTerm"
              placeholder="Enter search term..."
              class="input w-full"
            >
          </div>
        </div>
        
        <div class="mt-4 flex flex-wrap gap-2">
          <button 
            (click)="clearSearch()"
            class="btn btn-secondary"
          >
            Clear Search
          </button>
          <button 
            (click)="toggleFilter()"
            class="btn btn-primary"
          >
            Toggle Filter
          </button>
          <button 
            (click)="resetAll()"
            class="btn btn-error"
          >
            Reset All
          </button>
        </div>
      </div>

      <!-- Demo States -->
      <div class="space-y-8">
        <!-- Dynamic State (changes based on controls) -->
        <div class="border border-gray-200 rounded-lg p-6">
        <h3 class="text-lg font-semibold mb-4">Interactive Demo</h3>
          <ng-empty-state 
            [search]="searchTerm || undefined"
            [filter]="filterEnabled"
          ></ng-empty-state>
        </div>
      </div>

      <!-- Current State Info -->
      <div class="mt-8 p-4 bg-base-100">
        <h3 class="font-semibold mb-2">Current State:</h3>
        <div class="text-sm space-y-1">
          <p><strong>Search Term:</strong> {{ searchTerm || 'None' }}</p>
          <p><strong>Filter Enabled:</strong> {{ filterEnabled ? 'Yes' : 'No' }}</p>
          <p><strong>Active State:</strong> {{ getActiveState() }}
          </p>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class EmptyStateDemoComponent {
  searchTerm: string = '';
  filterEnabled: boolean = false;

  clearSearch(): void {
    this.searchTerm = '';
  }

  toggleFilter(): void {
    this.filterEnabled = !this.filterEnabled;
  }

  resetAll(): void {
    this.searchTerm = '';
    this.filterEnabled = false;
  }

  getActiveState(): string {
    if (this.searchTerm) {
      return 'search';
    } else if (this.filterEnabled) {
      return 'filter';
    } else {
      return 'default';
    }
  }
} 