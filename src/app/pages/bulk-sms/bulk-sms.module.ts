import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickSmsComponent } from './quick-sms/quick-sms.component';
import { SendBulksmsComponent } from './send-bulksms/send-bulksms.component';
import { SendSchedulesmsComponent } from './send-schedulesms/send-schedulesms.component';
import { SendsmsfileComponent } from './sendsmsfile/sendsmsfile.component';
import { SchedulesmsfileComponent } from './schedulesmsfile/schedulesmsfile.component';
import { FormsModule } from '@angular/forms';
import { NbInputModule, NbButtonModule, NbSelectModule, NbCardModule, NbToastrModule, NbAlertModule, NbUserModule, NbCheckboxModule } from '@nebular/theme';
import { NgxLoadingModule } from 'ngx-loading';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


@NgModule({
  declarations: [QuickSmsComponent, SendBulksmsComponent, SendSchedulesmsComponent, SendsmsfileComponent, SchedulesmsfileComponent],
  imports: [
    CommonModule,
    FormsModule,
    NbInputModule,
    NbButtonModule,
    NgxLoadingModule.forRoot({}),
    NbSelectModule,
    NbCardModule,
    NbToastrModule,
    NbAlertModule,
    NbUserModule,    
    MatButtonModule,
    NbCheckboxModule,
    MatButtonToggleModule,
   
  ]
})
export class BulkSmsModule { }
