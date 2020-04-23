import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientModel } from "./client.model";
import { NbToastrService } from '@nebular/theme';
import { environment } from '../../../../environments/environment';
import { ContactService } from '../../service/contact.service';
@Component({
  selector: 'addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.scss']
})
export class AddclientComponent implements OnInit {
  client: ClientModel;
  index: number;
  data: any;
  countries: any;
  constructor(public http: HttpClient,
    private router: Router,public service: ContactService,
    private toastrService: NbToastrService,
    private route: ActivatedRoute) {
      this.client=new ClientModel()
    }
   showToast(position, status,message) {
      this.index += 1;
      this.toastrService.show(
        status || 'Success',
        message,
        { position, status });
    }

  ngOnInit() {
    this.service.getcountry().subscribe(
      data => {
         console.log(data);
       this.countries = data;
    console.log(this.countries);
  });
  }
  allclient()
{
  debugger
  this.http.post(environment.backendUrl+'/Client/create', this.client)

      .subscribe(response => {
        debugger
        this.router.navigate(["pages/client/allclient/"]);
        this.showToast('top-right', 'success','added successfully');
        console.log(response);
      }, (err) => {
        this.showToast('top-right', 'danger', err.message);
       console.log ('Oooops!',err);
      });
  }
  uploadImage(mediaFile:any) {
    this.client.image = mediaFile;
    }

}
