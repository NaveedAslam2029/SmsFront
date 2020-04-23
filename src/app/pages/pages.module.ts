import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ClientModule } from './client/client.module';
import { ContactModule } from './contact/contact.module';
import { BulkSmsModule } from './bulk-sms/bulk-sms.module';


@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    ClientModule,
    ContactModule,
    BulkSmsModule,
  ],
  declarations: [
    PagesComponent,
  
  ],
})
export class PagesModule {
}
