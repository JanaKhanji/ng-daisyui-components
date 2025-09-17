import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

const STORAGE_KEY = 'app-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  constructor(@Inject(DOCUMENT) private doc: Document) {}

  availableThemes = [
    'light',
    'dark',
    'cupcake',
    'bumblebee',
    'customtheme',
    'emerald',
    'custombubble',
  ];

  get current(): string {
    return (
      this.doc.documentElement.getAttribute('data-theme') ||
      this.availableThemes[0]
    );
  }

  init() {
    const saved = localStorage.getItem(STORAGE_KEY);
    const theme =
      saved && this.availableThemes.includes(saved)
        ? saved
        : this.availableThemes[0];
    this.apply(theme);
  }

  apply(theme: string) {
    this.doc.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }

  next() {
    const i = this.availableThemes.indexOf(this.current);
    this.apply(this.availableThemes[(i + 1) % this.availableThemes.length]);
  }
}
