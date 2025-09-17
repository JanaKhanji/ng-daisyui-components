import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-loading-state',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="mt-20 flex w-full flex-col items-center text-lg font-semibold">
      @if (type === 'spinner') {
        <div
          class="animate-spin rounded-full h-12 w-12 border-8 border-base-300 border-t-primary mb-4"
        ></div>
      } @else if (type === 'dots') {
        <div class="flex space-x-2 mb-4">
          <div class="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
          <div
            class="w-3 h-3 bg-base-300 rounded-full animate-bounce"
            style="animation-delay: 0.1s"
          ></div>
          <div
            class="w-3 h-3 bg-primary rounded-full animate-bounce"
            style="animation-delay: 0.2s"
          ></div>
        </div>
      } @else if (type === 'bars') {
        <div class="flex space-x-1 mb-4">
          <div class="w-2 h-8 bg-base-300 animate-pulse"></div>
          <div
            class="w-2 h-8 bg-primary animate-pulse"
            style="animation-delay: 0.1s"
          ></div>
          <div
            class="w-2 h-8 bg-base-300 animate-pulse"
            style="animation-delay: 0.2s"
          ></div>
          <div
            class="w-2 h-8 bg-primary animate-pulse"
            style="animation-delay: 0.3s"
          ></div>
          <div
            class="w-2 h-8 bg-base-300 animate-pulse"
            style="animation-delay: 0.4s"
          ></div>
        </div>
      }

      @if (message) {
        <p class="text-base-content text-center">{{ message }}</p>
      } @else {
        <p class="text-base-content text-center">Loading...</p>
      }
    </div>
  `,
  styles: [],
})
export class LoadingStateComponent {
  @Input() type: 'spinner' | 'dots' | 'bars' = 'spinner';
  @Input() message?: string;
}
