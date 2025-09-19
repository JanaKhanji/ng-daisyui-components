import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'ng-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal-backdrop" (click)="modalService.onBackdropClick()">
      <div
        class="modal-container"
        (click)="$event.stopPropagation()"
        [ngClass]="modalSize"
      >
        <div class="modal-header">
          <ng-content select="[header]"></ng-content>
        </div>
        <div class="modal-body">
          <ng-content select="[body]"></ng-content>
        </div>
        <div class="modal-footer">
          <ng-content select="[footer]"></ng-content>
        </div>
      </div>
    </div>
  `,
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  modalSize: string = '';
  constructor(public modalService: ModalService) {
    this.modalSize = this.modalService.getModalSize();
  }
}
