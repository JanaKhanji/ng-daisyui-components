import { TemplateRef } from '@angular/core';

export class ToastInfo {
  toastClass: 'SUCCESS' | 'INFO' | 'WARNING' | 'ERROR';
  message: string | TemplateRef<string>;
  title: string;
  timesOut: boolean;

  constructor(
    message: string | TemplateRef<string>,
    title: string,
    toastClass: 'SUCCESS' | 'INFO' | 'WARNING' | 'ERROR' = 'INFO',
    timesOut = true,
  ) {
    this.message = message;
    this.title = title;
    this.toastClass = toastClass;
    this.timesOut = timesOut;
  }
}
