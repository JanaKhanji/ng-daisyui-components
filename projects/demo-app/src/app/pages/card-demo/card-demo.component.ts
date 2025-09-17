import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent, ToastService } from 'ng-shared-components';

@Component({
  selector: 'app-card-demo',
  standalone: true,
  imports: [CommonModule, CardComponent],
  template: `
    <div class="container mx-auto p-8">
      <h1 class="text-4xl font-bold mb-8 text-center">Card Component Demo</h1>
      
      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">Basic Examples</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Basic Card -->
          <ng-card title="Basic Card">
            <ng-container content>
              <p>This is a basic card component with title and content.</p>
            </ng-container>
          </ng-card>

          <!-- Card with Image -->
          <ng-card 
            title="Card with Image" 
            image="https://picsum.photos/300/200"
            imageAlt="Random image">
            <ng-container content>
              <p>This card has an image and demonstrates the image functionality.</p>
            </ng-container>
          </ng-card>

          <!-- Card with Actions -->
          <ng-card 
            title="Card with Actions" 
            [actions]="true">
            <ng-container content>
              <p>This card has action buttons at the bottom.</p>
            </ng-container>
            <ng-container actions>
            <button class="btn btn-primary btn-sm">Action 1</button>
              <button class="btn btn-secondary btn-sm">Action 2</button>
            </ng-container>
          </ng-card>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">Advanced Examples</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Custom Styled Card -->
          <ng-card 
            title="Custom Styled Card"
            customClass="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-xl">
            <ng-container content>
              <p>This card uses custom styling with different background and shadow.</p>
            </ng-container>
          </ng-card>

          <!-- Card with Long Content -->
          <ng-card 
            title="Card with Long Content" 
            [actions]="true">
            <ng-container content>
              <p>This card demonstrates how the component handles longer content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </ng-container>
            <ng-container actions>
              <button class="btn btn-accent btn-sm">Read More</button>
            </ng-container>
          </ng-card>

          <!-- Minimal Card -->
          <ng-card customClass="rounded-md bg-base-100">
            <ng-container content>
              <p>This is a minimal card with custom class and only content, no title or actions.</p>
            </ng-container>
          </ng-card>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">Interactive Examples</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Interactive Card -->
          <ng-card 
            title="Interactive Card" 
            [actions]="true">
            <ng-container content>
              <p>This card demonstrates interactive features with multiple action buttons.</p>
            </ng-container>
            <ng-container actions>
              <button class="btn btn-primary btn-sm" (click)="handlePrimaryAction()">Primary</button>
              <button class="btn btn-secondary btn-sm" (click)="handleSecondaryAction()">Secondary</button>
              <button class="btn btn-outline btn-sm" (click)="handleOutlineAction()">Outline</button>
            </ng-container>
          </ng-card>

          <!-- Card with Form -->
          <ng-card 
            title="Card with Form" 
            [actions]="true">
            <ng-container content>
              <p>This card contains a simple form example.</p>
            </ng-container>
            <ng-container actions>
              <input type="text" placeholder="Enter text..." class="input input-bordered input-sm mr-2">
              <button class="btn btn-success btn-sm">Submit</button>
            </ng-container>
          </ng-card>

          <!-- Status Card -->
          <ng-card 
            title="Status Card" 
            customClass="bg-success/10 border-success">
            <ng-container content>
              <p>This card shows different status states with appropriate styling.</p>
            </ng-container>
            <ng-container actions>
              <span class="badge badge-success">Active</span>
              <button class="btn btn-sm btn-ghost">Details</button>
            </ng-container>
          </ng-card>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class CardDemoComponent {
  constructor(private toastService: ToastService) {}
  
  handlePrimaryAction() {
    this.toastService.showSuccess('Primary action clicked');
  }

  handleSecondaryAction() {
    this.toastService.showSuccess('Secondary action clicked');
  }

  handleOutlineAction() {
    this.toastService.showSuccess('Outline action clicked');
  }
} 