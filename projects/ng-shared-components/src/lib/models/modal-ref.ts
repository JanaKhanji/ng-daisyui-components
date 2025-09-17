import { Observable, Subject } from 'rxjs';

export enum ModalSize {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  TWO_XL = '2xl',
  THREE_XL = '3xl',
  FOUR_XL = '4xl',
  FIVE_XL = '5xl',
  SIX_XL = '6xl',
  SEVEN_XL = '7xl',
  FULL = 'full',
  PROSE = 'prose',
}
export interface ModalConfig<TData> {
  data: TData;
  allowCloseOnBackdropClick?: boolean;
  allowCloseOnEscape?: boolean;
  modalSize?: ModalSize;
}

export class ModalRef<TData = any, TResult = any> {
  private readonly closed$ = new Subject<TResult | boolean>();
  afterClosed$: Observable<TResult | boolean> = this.closed$.asObservable();

  constructor(public data: TData, public config: ModalConfig<TData>) {}

  close(result?: TResult) {
    this.closed$.next(result as TResult);
    this.closed$.complete();
  }
}
