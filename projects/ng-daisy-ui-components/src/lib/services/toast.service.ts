import { TemplateRef, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ToastInfo } from '../models/toast-info';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private displayToastSubject = new Subject<boolean>();
  private toastInfo!: ToastInfo | null;
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  private restartTimer!: any;

  private showToast(toastInfo: ToastInfo, timesOut = true): void {
    this.toastInfo = toastInfo;
    this.displayToastSubject.next(true);
    if (this.restartTimer) window.clearTimeout(this.restartTimer);
    if (timesOut) {
      this.restartTimer = setTimeout(() => {
        this.hideNotification();
      }, 5000);
    }
  }

  hideNotification() {
    this.toastInfo = null;
    this.displayToastSubject.next(false);
  }

  show(toastInfo: ToastInfo) {
    this.showToast(toastInfo);
  }

  showSuccess(
    title: string,
    message: string | TemplateRef<string> = '',
    timesOut = true
  ): void {
    this.showToast(new ToastInfo(message, title, 'SUCCESS', timesOut));
  }

  showError(
    title: string,
    message: string | TemplateRef<string> = '',
    timesOut = true
  ): void {
    this.showToast(new ToastInfo(message, title, 'ERROR', timesOut));
  }

  showInfo(
    title: string,
    message: string | TemplateRef<string> = '',
    timesOut = true
  ): void {
    this.showToast(new ToastInfo(message, title, 'INFO', timesOut));
  }

  showWarning(
    title: string,
    message: string | TemplateRef<string> = '',
    timesOut = true
  ): void {
    this.showToast(new ToastInfo(message, title, 'WARNING', timesOut));
  }

  getToastInfo(): ToastInfo {
    return this.toastInfo as unknown as ToastInfo;
  }

  getDisplayToastSubject(): Subject<boolean> {
    return this.displayToastSubject;
  }
}
