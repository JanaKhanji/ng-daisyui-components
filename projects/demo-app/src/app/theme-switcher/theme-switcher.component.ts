import { Component } from '@angular/core';
import { ThemeService } from '../service/theme.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'theme-switcher',
  standalone: true,
  imports: [NgFor],
  template: `
    <div class="join">
      <select
        class="select select-bordered join-item"
        [value]="theme.current"
        #input
        (change)="theme.apply(input.value)"
      >
        <option *ngFor="let t of theme.availableThemes" [value]="t">
          {{ t }}
        </option>
      </select>
      <button class="btn btn-primary join-item" (click)="theme.next()">
        Next
      </button>
    </div>
  `,
})
export class ThemeSwitcherComponent {
  constructor(public theme: ThemeService) {}
}
