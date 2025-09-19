import {
  APP_INITIALIZER,
  ApplicationConfig,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ThemeService } from './service/theme.service';
import {
  GLOBAL_DRAWER_CONFIG,
  GLOBAL_MODAL_CONFIG,
  Size,
} from 'ng-daisy-ui-components';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: (theme: ThemeService) => () => theme.init(),
      deps: [ThemeService],
    },
    {
      provide: GLOBAL_DRAWER_CONFIG,
      useValue: {
        drawerWidth: Size.TWO_XL,
        allowBackdropClick: true,
        allowCloseOnEscape: true,
        drawerSide: 'end',
        hideCloseButton: false,
      },
    },
    {
      provide: GLOBAL_MODAL_CONFIG,
      useValue: {
        allowCloseOnBackdropClick: false,
        allowCloseOnEscape: false,
        modalSize: Size.LG,
      },
    },
  ],
};
