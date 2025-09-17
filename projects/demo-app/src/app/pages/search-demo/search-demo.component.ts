import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from 'ng-shared-components';

@Component({
  selector: 'app-search-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchComponent],
  template: `
    <div class="container mx-auto p-8">
      <h1 class="text-4xl font-bold mb-8 text-center">Search Component Demo</h1>
      
      <!-- Controls Section -->
      <div class="mb-8 p-6">
        <h2 class="text-2xl font-semibold mb-4">Controls</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium mb-2">Placeholder Text</label>
            <input 
              type="text" 
              [(ngModel)]="placeholderText" 
              placeholder="Enter placeholder text..."
              class="input w-full"
              >
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-2">Component State</label>
            <div class="flex items-center space-x-2">
              <input 
                type="checkbox" 
                [(ngModel)]="disabled" 
                class="checkbox"
                id="disabledCheckbox">
              <label for="disabledCheckbox" class="text-sm">Disabled</label>
            </div>
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
            (click)="resetAll()"
            class="btn btn-error"
          >
            Reset All
          </button>
        </div>
      </div>

      <!-- Interactive Demo -->
      <div class="border border-gray-200 rounded-lg p-6">
        <h3 class="text-lg font-semibold mb-4">Interactive Demo</h3>
        <div class="flex w-full justify-center items-center">
          <ng-search 
            class="min-w-md"
            [placeholderText]="placeholderText"
            [disabled]="disabled"
              [value]="searchValue"
              (searchEmitter)="handleSearch($event)">
            </ng-search>
        </div>
      </div>

      <!-- Current State Info -->
      <div class="mt-8 p-4 bg-base-100">
        <h3 class="font-semibold mb-2">Current Configuration:</h3>
        <div class="text-sm space-y-1">
          <p><strong>Placeholder Text:</strong> {{ placeholderText || 'Default' }}</p>
          <p><strong>Disabled:</strong> {{ disabled ? 'Yes' : 'No' }}</p>
          <p><strong>Search Value:</strong> {{ searchValue || 'None' }}</p>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class SearchDemoComponent {
  placeholderText = 'Search';
  disabled = false;
  searchValue = '';

  handleSearch(searchTerm: string) {
    this.searchValue = searchTerm;
  }

  clearSearch(): void {
    this.searchValue = '';
  }
  
  resetAll(): void {
    this.placeholderText = 'Search';
    this.disabled = false;
    this.searchValue = '';
  }
}
