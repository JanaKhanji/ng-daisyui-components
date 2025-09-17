import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalExampleComponent } from './modal-example.component';
import { ModalScrollableExampleComponent } from './modal-scrollable-example.component';
import { ModalService, ToastService, ModalSize } from 'ng-daisy-ui-components';
import { ModalResultsComponent } from './modal-results.component';

@Component({
  selector: 'app-modal-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mx-auto p-8">
      <h1 class="text-4xl font-bold mb-8 text-center">Modal Component Demo</h1>
      
      <!-- Advanced Modal Examples -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">Advanced Modal Examples</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="border border-gray-200 rounded-lg p-6">
            <h3 class="text-lg font-semibold mb-2">Modal Example Component</h3>
            <p class="text-gray-600 mb-4">Uses the existing modal example component with content projection.</p>
            <button 
              (click)="openModalExample()"
              class="btn btn-primary"
            >
              Open Modal Example
            </button>
          </div>

          <div class="border border-gray-200 rounded-lg p-6">
            <h3 class="text-lg font-semibold mb-2">Modal Results Example</h3>
            <p class="text-gray-600 mb-4">Uses the existing modal results example component.</p>
            <button 
              (click)="openModalResultsExample()"
              class="btn btn-primary"
            >
              Open Modal Results Example
            </button>
          </div>
          <div class="border border-gray-200 rounded-lg p-6">
            <h3 class="text-lg font-semibold mb-2">Scrollable Modal Example</h3>
            <p class="text-gray-600 mb-4">Uses the existing scrollable modal example component.</p>
            <button 
              (click)="openScrollableModalExample()"
              class="btn btn-primary"
            >
              Open Scrollable Modal Example
            </button>
          </div> 
          <div class="border border-gray-200 rounded-lg p-6">
            <h3 class="text-lg font-semibold mb-2">Custom Configuration Modal Example</h3>
            <p class="text-gray-600 mb-4">Uses the existing custom configuration modal example component.</p>
            <button 
              (click)="openCustomConfigurationModalExample()"
              class="btn btn-primary"
            >
              Open Custom Configuration Modal Example
            </button>
          </div>  
        </div>
      </div>
  `,
  styles: []
})
export class ModalDemoComponent {
  constructor(
    private modalService: ModalService,
    private toastService: ToastService
  ) {}

  openModalExample(): void {
    const modalRef = this.modalService.open(ModalExampleComponent, {
      data: {
        title: 'Modal Example',
        body: 'This is the modal example component with custom content projection.'
      },
      allowCloseOnBackdropClick: false,
      allowCloseOnEscape: false,
    })  ;

    modalRef.afterClosed$.subscribe((result: boolean | undefined) => {
      this.toastService.showSuccess(`Modal example closed with result: ${result}`);
    });
  }

  openScrollableModalExample(): void {
      const modalRef = this.modalService.open(ModalScrollableExampleComponent, {
        data: {
          title: 'Scrollable Modal Example',
          body: 'This is a scrollable modal example with lots of content to demonstrate scrolling behavior.'
        },
      });

      modalRef.afterClosed$.subscribe((result: boolean | undefined) => {
        this.toastService.showSuccess(`Scrollable modal example closed with result: ${result}`);
      });
  }

  openModalResultsExample(): void {
    const modalRef = this.modalService.open(ModalResultsComponent, {
      data: {
        title: 'Modal Results Example',
        body: 'This is the modal results example component with custom content projection.'
      },
    });

    modalRef.afterClosed$.subscribe((result: {message: string} | undefined) => {
      this.toastService.showSuccess(`Modal results example closed with message: ${result?.message}`);
    });
  }

  openCustomConfigurationModalExample(): void {
    this.modalService.open(ModalExampleComponent, {
      data: {
        title: 'Custom Configuration Modal Example',
        body: 'This is the custom configuration modal example component with custom content projection.'
      },
      allowCloseOnBackdropClick: true,
      allowCloseOnEscape: true,
      modalSize: ModalSize.SEVEN_XL
    });
  }
} 