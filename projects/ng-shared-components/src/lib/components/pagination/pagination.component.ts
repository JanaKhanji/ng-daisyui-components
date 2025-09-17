import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  templateUrl: './pagination.component.html',
})
export class PaginationComponent implements OnChanges {
  @Output() pageChange = new EventEmitter<number>();
  @Input({ required: true }) count = 0;
  @Input({ required: true }) page = 1;
  @Input({ required: true }) pageSize = 100;
  lastPage = false;
  totalPages: Array<number> = [];
  maxNumberOfButtons = 1;

  ngOnChanges(): void {
    this.updateLastPage();
    this.totalPages = new Array(Math.ceil(this.count / this.pageSize));
  }

  selectPage(page: number): void {
    if (page > this.totalPages.length || page < 1 || this.page === page) {
      return;
    }
    this.page = page;
    this.pageChange.next(this.page);
    this.updateLastPage();
  }

  updateLastPage(): void {
    this.lastPage = this.page >= Math.ceil(this.count / this.pageSize);
  }
}
