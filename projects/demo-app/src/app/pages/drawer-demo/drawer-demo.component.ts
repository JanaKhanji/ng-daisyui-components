import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerLayoutComponent, DrawerService, ToastService } from 'ng-daisy-ui-components';

@Component({
  selector: 'app-card-demo',
  standalone: true,
  imports: [CommonModule, DrawerLayoutComponent],
  template: `
    <div class="container mx-auto p-8">
      <h1 class="text-4xl font-bold mb-8 text-center">Drawer Component Demo</h1>
      <ng-drawer drawerSide="drawer-start">
        <ng-container page-content>
          <p>Page content</p>
          <button class="btn btn-primary" (click)="openDrawer()">Open Drawer</button>
        </ng-container>
        <ng-container drawer-content>
          <p>Drawer content</p>
        </ng-container>
      </ng-drawer>
    </div>
  `,
  styles: []
})
export class DrawerDemoComponent {
  constructor(private drawerService: DrawerService) {}

  openDrawer() {
    this.drawerService.open();
  }
} 