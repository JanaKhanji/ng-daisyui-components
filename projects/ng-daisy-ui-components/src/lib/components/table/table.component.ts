import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Column } from './models/column';
import { OrderByDirectionEnum } from '../../models/order-by-direction.enum';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'ng-table',
  standalone: true,
  imports: [CommonModule, PaginationComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent<T> {
  @Input() columns: Column<T>[] = [];
  @Input() dataSource: T[] = [];
  @Input({ required: true }) count = 0;
  @Input({ required: true }) page = 1;
  @Input({ required: true }) pageSize = 100;
  @Input({ required: false }) customClass = '';
  @Output() sortChange = new EventEmitter<Column<T>[]>();
  @Output() rowClick = new EventEmitter<T>();
  @Output() pageChange = new EventEmitter<number>();
  sortDirectionEnum = OrderByDirectionEnum;

  sortData(column: Column<T>) {
    if (column.isSortable) {
      if (!column.sort) {
        column.sort = OrderByDirectionEnum.ASC;
      } else {
        column.sort =
          column.sort === OrderByDirectionEnum.ASC
            ? OrderByDirectionEnum.DESC
            : OrderByDirectionEnum.ASC;
      }

      // Set all other columns to sort = null
      this.columns.forEach((col) => {
        if (col !== column) {
          col.sort = null;
        }
      });
      this.sortChange.emit(this.columns);
    }
  }

  handleRowClick(row: T) {
    this.rowClick.emit(row);
  }

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  isTemplate(value: any): value is TemplateRef<HTMLElement> {
    return value instanceof TemplateRef;
  }

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  getTemplate(column: Column<T>, row: T): TemplateRef<any> {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    return column.cell(row) as TemplateRef<any>;
  }
}
