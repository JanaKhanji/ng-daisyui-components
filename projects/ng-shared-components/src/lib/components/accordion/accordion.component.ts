import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ng-accordion',
  standalone: true,
  imports: [CommonModule],
  template: `
      <div class="collapse collapse-arrow bg-base-100 border border-base-300" [class]="customClass">
        <input type="checkbox" [checked]="isOpen" (change)="toggleAccordion()" />
        <div class="collapse-title font-semibold">
        <ng-content select="[title]"></ng-content>

        </div>
        <div class="collapse-content" [class]="isOpen ? 'min-h-fit pb-4 visible' : ''">
        <ng-content select="[content]"></ng-content>
        </div>
      </div>
      
  `,
  styles: []
})
export class AccordionComponent {
  @Input() customClass?: string = '';
  isOpen: boolean = false;

  toggleAccordion(): void {
    this.isOpen = !this.isOpen;
  }
}
