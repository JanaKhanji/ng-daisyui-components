import { TemplateRef } from '@angular/core';
import { OrderByDirectionEnum } from '../../../models/order-by-direction.enum';

export interface Column<T> {
  columnDef: string;
  header: string;
  cell: (row: T) => string | TemplateRef<HTMLElement>;
  onClick?: (row: T) => void;
  isSortable: boolean;
  sort?: OrderByDirectionEnum | null;
  width?: number | null;
  minWidth?: number | null;
}
