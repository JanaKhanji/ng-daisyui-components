import {
  ApplicationRef,
  ComponentRef,
  EnvironmentInjector,
  Injectable,
  Inject,
  Injector,
  InjectionToken,
  Type,
  createComponent,
} from '@angular/core';
import { ModalRef, ModalConfig, ModalSize } from '../models/modal-ref';

export interface GlobalModalConfig {
  allowCloseOnBackdropClick?: boolean;
  allowCloseOnEscape?: boolean;
  modalSize?: ModalSize;
}

export const GLOBAL_MODAL_CONFIG = new InjectionToken<GlobalModalConfig>(
  'GlobalModalConfig'
);

@Injectable({ providedIn: 'root' })
export class ModalService {
  ref: ModalRef<unknown, unknown> | null = null;
  private allowCloseOnBackdropClick: boolean = true;
  private allowCloseOnEscape: boolean = true;
  private modalSize: ModalSize = ModalSize.MD;

  constructor(
    private appRef: ApplicationRef,
    private environmentInjector: EnvironmentInjector,
    @Inject(GLOBAL_MODAL_CONFIG)
    private globalConfig: GlobalModalConfig = {
      allowCloseOnBackdropClick: true,
      allowCloseOnEscape: true,
      modalSize: ModalSize.LG,
    }
  ) {
    this.allowCloseOnBackdropClick =
      this.globalConfig.allowCloseOnBackdropClick ?? true;
    this.allowCloseOnEscape = this.globalConfig.allowCloseOnEscape ?? true;
    this.modalSize = this.globalConfig.modalSize ?? ModalSize.LG;
  }

  open<TData = unknown, TResult = unknown>(
    component: Type<unknown>,
    config: ModalConfig<TData>
  ): ModalRef<TData, TResult | boolean> {
    // Merge global config with provided config
    const mergedConfig: ModalConfig<TData> = {
      ...config,
      allowCloseOnBackdropClick:
        config.allowCloseOnBackdropClick ?? this.allowCloseOnBackdropClick,
      allowCloseOnEscape: config.allowCloseOnEscape ?? this.allowCloseOnEscape,
      modalSize: config.modalSize ?? this.modalSize,
    };

    const modalRef = new ModalRef<TData, TResult | boolean>(
      config.data,
      mergedConfig
    );
    // create injector providing ModalRef
    const injector = Injector.create({
      providers: [{ provide: ModalRef, useValue: modalRef }],
      parent: this.environmentInjector.get(Injector),
    });

    // create the component dynamically
    const compRef: ComponentRef<unknown> = createComponent(component, {
      environmentInjector: this.environmentInjector,
      elementInjector: injector,
    });

    this.appRef.attachView(compRef.hostView);
    const domElem = (
      compRef.hostView as unknown as { rootNodes: HTMLElement[] }
    ).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    // escape key
    if (mergedConfig.allowCloseOnEscape !== false) {
      const onKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          modalRef.close(false);
        }
      };
      document.addEventListener('keydown', onKeyDown);

      modalRef.afterClosed$.subscribe(() => {
        document.removeEventListener('keydown', onKeyDown);
      });
    }

    // cleanup on close
    modalRef.afterClosed$.subscribe(() => {
      this.appRef.detachView(compRef.hostView);
      compRef.destroy();
    });
    this.ref = modalRef as unknown as ModalRef<unknown, unknown>;
    return modalRef;
  }

  onBackdropClick() {
    if (this.ref?.config.allowCloseOnBackdropClick !== false) {
      this.ref?.close(false);
    }
  }

  getModalSize(): ModalSize {
    return this.ref?.config.modalSize ?? this.modalSize;
  }
}
