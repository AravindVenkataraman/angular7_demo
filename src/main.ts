import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {
  applyPolyfills,
  defineCustomElements
} from '@cvsdigital_ui-arch/ui-toolkit/dist/loader';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// import cssVars from 'css-vars-ponyfill';

// cssVars({
//   include: 'style',
//   onlyLegacy: false,
//   watch: true,
//   onComplete(cssText, styleNode, cssVariables) {
//     console.log(cssText);
//   }
// });

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// Bind the custom elements to the window object
applyPolyfills().then(() => {
  defineCustomElements(window);
});
