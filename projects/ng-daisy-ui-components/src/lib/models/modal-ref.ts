import { Observable, Subject } from 'rxjs';
import { Size } from './sizes';

export interface ModalComponentInterface<TData = unknown, TResult = unknown> {
  ref: ModalRef<TData, TResult>;
}

export interface ModalConfig<TData> {
  data: TData;
  allowCloseOnBackdropClick?: boolean;
  allowCloseOnEscape?: boolean;
  modalSize?: Size;
}

export class ModalRef<TData = unknown, TResult = unknown> {
  private readonly closed$ = new Subject<TResult>();
  afterClosed$: Observable<TResult> = this.closed$.asObservable();

  constructor(
    public data: TData,
    public config: ModalConfig<TData>
  ) {}

  close(result: TResult) {
    this.closed$.next(result);
    this.closed$.complete();
  }
}
