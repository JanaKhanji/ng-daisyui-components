  import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ModalRef } from 'ng-shared-components';
import { ModalComponent } from 'ng-shared-components';

@Component({
  selector: 'app-modal-results',
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
        <button (click)="ref.close({message: 'Cancel'})" class="btn btn-secondary">
          Cancel
        </button>
        <button (click)="ref.close({message: 'Save'})" class="btn btn-primary">Save</button>
      </ng-container>
    </ng-modal>
  `,
})
export class ModalResultsComponent {
  ref: ModalRef<{ title: string; body: string }, {message: string}> = inject(ModalRef);
}
