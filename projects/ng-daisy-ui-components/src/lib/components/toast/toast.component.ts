import { Component, TemplateRef } from '@angular/core';
import { ToastInfo } from '../../models/toast-info';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'ng-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
})
export class ToastComponent {
  displayToast = false;
  toastInfo!: ToastInfo;
  template!: TemplateRef<string>;
  isString = true;
  opacityClass = 'opacity-0';

  constructor(public toastService: ToastService) {
    this.toastService.getDisplayToastSubject().subscribe((shouldDisplay) => {
      if (shouldDisplay) {
        this.displayToast = shouldDisplay;
        this.opacityClass = 'opacity-100';
        this.toastInfo = toastService.getToastInfo();
        this.isString = typeof this.toastInfo.message === 'string';
        if (!this.isString) {
          this.template = this.toastInfo
            .message as unknown as TemplateRef<string>;
        }
      } else {
        this.opacityClass = 'opacity-0';
        setTimeout(() => {
          this.displayToast = shouldDisplay;
        }, 300);
      }
    });
  }
}
