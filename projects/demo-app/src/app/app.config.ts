import { APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ThemeService } from './service/theme.service';
import { GlobalDrawerConfig, GlobalModalConfig, ModalSize } from 'ng-shared-components';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: (theme: ThemeService) => () => theme.init(),
      deps: [ThemeService]
    },
    {
      provide: GlobalDrawerConfig,
      useValue: {
        drawerWidth: 'w-9/12',
        allowBackdropClick: true,
        allowCloseOnEscape: false,
        drawerSide: 'end',
        hideCloseButton: false
      }
    },
    {
      provide: GlobalModalConfig,
      useValue: {
        allowCloseOnBackdropClick: false,
        allowCloseOnEscape: false,
        modalSize: ModalSize.LG
      }
    }
  
  ]
};
