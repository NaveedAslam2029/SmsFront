import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { PagesComponent } from "./pages.component";
import { AllclientComponent } from "./client/allclient/allclient.component";
import { AddclientComponent } from "./client/addclient/addclient.component";
import { EditclientComponent } from "./client/editclient/editclient.component";
import { ProfileComponent } from "./client/profile/profile.component";
import { UpdatelimitComponent } from "./client/updatelimit/updatelimit.component";
import { SendsmsComponent } from "./client/sendsms/sendsms.component";
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ViewContactComponent } from './contact/view-contact/view-contact.component';
import { AddContactComponent } from './contact/add-contact/add-contact.component';
import { EditContactComponent } from './contact/edit-contact/edit-contact.component';
import { ImportcontactComponent } from './contact/importcontact/importcontact.component';
import { QuickSmsComponent } from './bulk-sms/quick-sms/quick-sms.component';
import { SendBulksmsComponent } from './bulk-sms/send-bulksms/send-bulksms.component';
import { SendSchedulesmsComponent } from './bulk-sms/send-schedulesms/send-schedulesms.component';
import { SendsmsfileComponent } from './bulk-sms/sendsmsfile/sendsmsfile.component';
import { SchedulesmsfileComponent } from './bulk-sms/schedulesmsfile/schedulesmsfile.component';

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "dashboard",
        redirectTo: "dashboard",
        pathMatch: "full"
      },
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
      },
      {
        path: "client/allclient",
        component: AllclientComponent
      },
      {
        path: "client/addclient",
        component: AddclientComponent
      },
      {
        path: "editclient",
        component: EditclientComponent
      },
      {
        path: "client/editclient/:id",
        component: EditclientComponent
      },
      {
        path: "client/profile",
        component: ProfileComponent
      },
      {
        path: "client/limit",
        component: UpdatelimitComponent
      },
      {
        path: "client/sms",
        component: SendsmsComponent
      },
      {
        path:"contact/contact-list",
        component:ContactListComponent
      },
      {
        path: "contact/add-contact",
        component: AddContactComponent
      },
      {
        path: "contact/edit-contact",
        component: EditContactComponent
      },
      {
        path: "contact/edit-contact/:id",
        component: EditContactComponent
      },
      {
        path: "contact/view-contact",
        component: ViewContactComponent
      },
      {
        path: "contact/view-contact/:id",
        component: ViewContactComponent
      },
      {
        path: "contact/importcontact",
        component:ImportcontactComponent
      },
      {
        path: "bulk-sms/quick-sms",
        component:QuickSmsComponent
      },
      {
        path: "bulk-sms/send-bulksms",
        component:SendBulksmsComponent
      },
      {
        path: "bulk-sms/send-schedulesms",
        component:SendSchedulesmsComponent
      },
      {
        path: "bulk-sms/sendsmsfile",
        component:SendsmsfileComponent
      },
      {
        path: "bulk-sms/schedulesmsfile",
        component:SchedulesmsfileComponent
      },
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
