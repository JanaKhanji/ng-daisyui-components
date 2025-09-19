import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Subject } from 'rxjs';
import { Size } from '../models/sizes';

export interface GlobalDrawerConfig {
  drawerWidth?: Size;
  allowBackdropClick?: boolean;
  allowCloseOnEscape?: boolean;
  drawerSide?: 'end' | 'start';
  hideCloseButton?: boolean;
}

export const GLOBAL_DRAWER_CONFIG = new InjectionToken<GlobalDrawerConfig>(
  'GlobalDrawerConfig'
);

@Injectable({
  providedIn: 'root',
})
export class DrawerService {
  private displayDrawerSubject = new Subject<boolean>();
  private drawerWidth: Size = Size.LG;
  private allowBackdropClick: boolean = true;
  private allowCloseOnEscape: boolean = true;
  private drawerSide: 'end' | 'start' = 'end';
  private hideCloseButton: boolean = false;
  private currentConfig: GlobalDrawerConfig | undefined = undefined;
  constructor(
    @Inject(GLOBAL_DRAWER_CONFIG)
    private config: GlobalDrawerConfig = {
      drawerWidth: Size.LG,
      allowBackdropClick: true,
      allowCloseOnEscape: true,
      drawerSide: 'end',
      hideCloseButton: false,
    }
  ) {
    this.drawerWidth = this.config.drawerWidth || Size.LG;
    this.allowBackdropClick = this.config.allowBackdropClick || true;
    this.allowCloseOnEscape = this.config.allowCloseOnEscape || true;
    this.drawerSide = this.config.drawerSide || 'end';
    this.hideCloseButton = this.config.hideCloseButton || false;
  }

  getDefaultConfig(): GlobalDrawerConfig {
    return this.config;
  }

  open(config: GlobalDrawerConfig | undefined = undefined) {
    this.currentConfig = config || this.config;
    this.displayDrawerSubject.next(true);
    if (this.currentConfig.allowCloseOnEscape !== false) {
      const onKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          this.close();
        }
      };
      document.addEventListener('keydown', onKeyDown);
    }
  }

  getCurrentConfig(): GlobalDrawerConfig | undefined {
    return this.currentConfig;
  }

  close() {
    this.currentConfig = undefined;
    this.displayDrawerSubject.next(false);
  }

  getDisplayDrawerSubject(): Subject<boolean> {
    return this.displayDrawerSubject;
  }

  setDrawerWidth(width: Size) {
    this.drawerWidth = width;
  }

  getDrawerWidth(): Size {
    return this.drawerWidth;
  }

  setAllowBackdropClick(allow: boolean) {
    this.allowBackdropClick = allow;
  }

  getAllowBackdropClick(): boolean {
    return this.allowBackdropClick;
  }

  setAllowCloseOnEscape(allow: boolean) {
    this.allowCloseOnEscape = allow;
  }

  getAllowCloseOnEscape(): boolean {
    return this.allowCloseOnEscape;
  }

  setDrawerSide(side: 'end' | 'start') {
    this.drawerSide = side;
  }

  getDrawerSide(): 'end' | 'start' {
    return this.drawerSide;
  }

  setHideCloseButton(hide: boolean) {
    this.hideCloseButton = hide;
  }

  getHideCloseButton(): boolean {
    return this.hideCloseButton;
  }
}
