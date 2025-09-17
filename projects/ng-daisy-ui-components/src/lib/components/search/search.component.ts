import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  skip,
  Subscription,
} from 'rxjs';

@Component({
  selector: 'ng-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="flex flex-row w-full">
      <div class="relative w-full">
        <label for="searchInput" class="sr-only">Search text</label>
        <input
          type="text"
          [disabled]="disabled"
          id="searchInput"
          [ngModel]="value"
          (ngModelChange)="updateText($event)"
          [placeholder]="placeholderText"
          class="input h-12 w-full min-w-64placeholder:text-base-content  placeholder:opacity-50"
        />
        <span
          class="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center"
          aria-hidden="true"
        >
          <svg
            class="stroke-current"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </svg>
        </span>
      </div>
    </div>
  `,
  styles: [],
})
export class SearchComponent implements OnDestroy, OnChanges {
  @Output() searchEmitter = new EventEmitter<string>();
  @Input() placeholderText = 'Start a search';
  @Input() value: string = '';
  @Input() disabled = false;
  onSearchSubject: BehaviorSubject<string>;
  searchSubscription: Subscription;

  constructor() {
    this.onSearchSubject = new BehaviorSubject<string>('');
    this.searchSubscription = this.onSearchSubject
      .asObservable()
      .pipe(debounceTime(500), distinctUntilChanged(), skip(1))
      .subscribe(() => {
        return this.searchEmitter.emit(this.value);
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value']) {
      this.value = changes['value'].currentValue;
    }
  }

  updateText(text: string) {
    this.value = text;
    this.onSearchSubject.next(text);
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }
}
