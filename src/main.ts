import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { HeaderComponent } from './app/header/header/header.component';
import { CardsComponent } from './app/cards/cards/cards.component';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
