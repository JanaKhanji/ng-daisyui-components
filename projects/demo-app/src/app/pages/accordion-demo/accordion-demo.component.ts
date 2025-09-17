import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from '../../../../../ng-daisy-ui-components/src/lib/components/accordion/accordion.component';

@Component({
  selector: 'app-accordion-demo',
  standalone: true,
  imports: [CommonModule, AccordionComponent],
  templateUrl: './accordion-demo.component.html',
  styles: [],
})
export class AccordionDemoComponent {}
