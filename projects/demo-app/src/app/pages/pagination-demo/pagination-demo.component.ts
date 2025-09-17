import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from 'ng-shared-components';

@Component({
  selector: 'app-pagination-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, PaginationComponent],
  template: `
    <div class="container mx-auto p-8">
      <h1 class="text-4xl font-bold mb-8 text-center">Pagination Component Demo</h1>
      
      <!-- Controls Section -->
      <div class="mb-8 p-6">
        <h2 class="text-2xl font-semibold mb-4">Controls</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium mb-2">Total Items</label>
            <input 
              type="number" 
              [(ngModel)]="count" 
              min="1" 
              placeholder="Enter total count..."
              class="input w-full"
            >
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-2">Page Size</label>
            <input 
              type="number" 
              [(ngModel)]="pageSize" 
              min="1" 
              placeholder="Enter page size..."
              class="input w-full"
            >
          </div>
        </div>
        
        <div class="mt-4 flex flex-wrap gap-2">
          <button 
            (click)="goToFirstPage()"
            class="btn btn-secondary"
          >
            Go to First Page
          </button>
          <button 
            (click)="goToLastPage()"
            class="btn btn-primary"
          >
            Go to Last Page
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
          <app-pagination 
            [count]="count" 
            [page]="currentPage" 
            [pageSize]="pageSize" 
            (pageChange)="handlePageChange($event)">
          </app-pagination>
        </div>
      </div>

      <!-- Current State Info -->
      <div class="mt-8 p-4 bg-base-100">
        <h3 class="font-semibold mb-2">Current Configuration:</h3>
        <div class="text-sm space-y-1">
          <p><strong>Total Items:</strong> {{ count }}</p>
          <p><strong>Page Size:</strong> {{ pageSize }}</p>
          <p><strong>Current Page:</strong> {{ currentPage }}</p>
          <p><strong>Total Pages:</strong> {{ getTotalPages() }}</p>
          <p><strong>Items Range:</strong> {{ getStartItem() }} - {{ getEndItem() }}</p>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class PaginationDemoComponent {
  currentPage = 1;
  count = 100;
  pageSize = 10;

  handlePageChange(page: number) {
    this.currentPage = page;
  }

  goToFirstPage(): void {
    this.currentPage = 1;
  }

  goToLastPage(): void {
    this.currentPage = this.getTotalPages();
  }

  resetAll(): void {
    this.currentPage = 1;
    this.count = 100;
    this.pageSize = 10;
  }

  getTotalPages(): number {
    return Math.ceil(this.count / this.pageSize);
  }

  getStartItem(): number {
    return (this.currentPage - 1) * this.pageSize + 1;
  }

  getEndItem(): number {
    const endItem = this.currentPage * this.pageSize;
    return Math.min(endItem, this.count);
  }
} 