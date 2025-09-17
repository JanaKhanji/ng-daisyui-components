import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  import { ModalService  } from '../../services/modal.service';
import { ModalSize } from '../../models/modal-ref';


@Component({
  selector: 'ng-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  modalSize: string = '';
  constructor(public modalService: ModalService) {
    switch (this.modalService.getModalSize()) {
      case ModalSize.XS:
        this.modalSize = 'max-w-xs';  
        break;
      case ModalSize.SM:
        this.modalSize = 'max-w-sm';
        break;
    case ModalSize.MD:
      this.modalSize = 'max-w-md';
      break;
    case ModalSize.LG:
      this.modalSize = 'max-w-lg';
      break;
    case ModalSize.XL:
      this.modalSize = 'max-w-xl';
      break;
    case ModalSize.TWO_XL:
      this.modalSize = 'max-w-xl';
      break;
    case ModalSize.THREE_XL:
      this.modalSize = 'max-w-2xl';
      break;
    case ModalSize.FOUR_XL:
      this.modalSize = 'max-w-3xl';
      break;
    case ModalSize.FIVE_XL:
      this.modalSize = 'max-w-4xl';
      break;
    case ModalSize.SIX_XL:
      this.modalSize = 'max-w-5xl';
      break;
    case ModalSize.SEVEN_XL:
      this.modalSize = 'max-w-6xl';
      break;
    }
  }

}