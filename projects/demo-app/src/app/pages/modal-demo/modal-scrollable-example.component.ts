import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ModalComponent, ModalRef } from 'ng-daisy-ui-components';

@Component({
  selector: 'app-modal-scrollable-example',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  template: `
    <ng-modal>
      <ng-container header>
        <h1>{{ ref.data.title }}</h1>
      </ng-container>
      <ng-container body>
        <div class="flex flex-col">
          <p *ngFor="let item of [].constructor(50); trackBy: trackByIndex">
            {{ ref.data.body }}
          </p>
        </div>
      </ng-container>
      <ng-container footer>
        <button (click)="ref.close(false)" class="btn btn-secondary">
          Close
        </button>
      </ng-container>
    </ng-modal>
  `,
})
export class ModalScrollableExampleComponent {
  ref: ModalRef<{ title: string; body: string }, boolean> = inject(ModalRef);
  trackByIndex(index: number): number {
    return index;
  }
}
