import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ng-empty-state',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="mt-20 flex w-full flex-col items-center text-lg font-semibold">
      @if (search) {
        <div aria-hidden="true" class="text-gray-400 mb-2">
          <svg
            class="w-20 h-20"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <p class="mt-4 text-lg text-center">
          Nothing matches the search term:
          <span class="font-bold">"{{ search }}"</span>
        </p>
        <p class="text-gray-600">Check for typo or enter a different term</p>
      } @else if (filter) {
        <div aria-hidden="true" class="text-gray-400 mb-2">
          <svg
            class="w-20 h-20"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            ></path>
          </svg>
        </div>
        <p class="mt-4 text-lg text-center">Nothing matches the filter</p>
        <p class="text-gray-600">Clear the filter to get more results</p>
      } @else {
        <div aria-hidden="true" class="text-gray-400 mb-2">
          <svg
            class="w-20 h-20"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z"
            ></path>
          </svg>
        </div>
        <div class="max-w-screen-sm text-center">
          <p class="mt-4 text-lg">Looks like there's nothing here!</p>
          <p class="text-gray-600">
            Try adding some content or check back later
          </p>
        </div>
      }
    </div>
  `,
  styles: [],
})
export class EmptyStateComponent {
  @Input({ required: false }) search?: string;
  @Input({ required: false }) filter?: boolean = false;
}
