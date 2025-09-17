import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ng-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card shadow-xl" [class]="customClass">
      <div *ngIf="image" class="card-image">
        <img [src]="image" [alt]="imageAlt || 'Card image'" class="w-full h-auto rounded-t-(--radius-box)" />
      </div>
      <div class="card-body">
        <h2 *ngIf="title" class="card-title">{{ title }}</h2>
        <div>
          <ng-content select="[content]"></ng-content>
        </div>
        <div *ngIf="actions" class="card-actions w-full flex justify-center gap-2">
          <ng-content select="[actions]"></ng-content>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class CardComponent {
  @Input() title?: string;
  @Input() content?: string;
  @Input() image?: string;
  @Input() imageAlt?: string;
  @Input() actions?: boolean;
  @Input() customClass?: string = 'bg-base-100';
} 