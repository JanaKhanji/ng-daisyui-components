import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ModalRef } from 'ng-daisy-ui-components';
import { ModalComponent } from 'ng-daisy-ui-components';

@Component({
  selector: 'app-modal-example',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  template: `
    <ng-modal>
      <ng-container header>
        {{ ref.data.title }}
      </ng-container>
      <ng-container body>
        {{ ref.data.body }}
      </ng-container>
      <ng-container footer>
        <div class="flex justify-between w-full">
          <button (click)="ref.close(false)" class="btn btn-secondary">
            Cancel
          </button>
          <button (click)="ref.close(true)" class="btn btn-primary">
            Save
          </button>
        </div>
      </ng-container>
    </ng-modal>
  `,
})
export class ModalExampleComponent {
  ref: ModalRef<{ title: string; body: string }, boolean> = inject(ModalRef);
}
