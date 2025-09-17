import { Routes } from '@angular/router';
import { ModalDemoComponent } from './pages/modal-demo/modal-demo.component';
import { CardDemoComponent } from './pages/card-demo/card-demo.component';
import { AccordionDemoComponent } from './pages/accordion-demo/accordion-demo.component';
import { EmptyStateDemoComponent } from './pages/empty-state-demo/empty-state-demo.component';
import { LoadingStateDemoComponent } from './pages/loading-state-demo/loading-state-demo.component';
import { PaginationDemoComponent } from './pages/pagination-demo/pagination-demo.component';
import { SearchDemoComponent } from './pages/search-demo/search-demo.component';
import { TableDemoComponent } from './pages/table-demo/table-demo.component';
import { DrawerDemoComponent } from './pages/drawer-demo/drawer-demo.component';

export const routes: Routes = [
    { path: 'card', component: CardDemoComponent },
    { path: 'accordion', component: AccordionDemoComponent },
    { path: 'empty-state', component: EmptyStateDemoComponent },
    { path: 'loading-state', component: LoadingStateDemoComponent },
    { path: 'modal', component: ModalDemoComponent },   
    { path: 'pagination', component: PaginationDemoComponent },
    { path: 'search', component: SearchDemoComponent },
    { path: 'table', component: TableDemoComponent },
    { path: 'drawer', component: DrawerDemoComponent },
    { path: '', redirectTo: '/card', pathMatch: 'full' }
];
