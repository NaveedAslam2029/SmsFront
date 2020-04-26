import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../service/contact.service';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'quick-sms',
  templateUrl: './quick-sms.component.html',
  styleUrls: ['./quick-sms.component.scss']
})
export class QuickSmsComponent implements OnInit {
  countries: any;
  index: number;
  toastrService: any;


  constructor(public http: HttpClient,
    private router: Router, private service: ContactService) { }
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
  sendSms(){
    debugger
    this.http.post(environment.backendUrl+'/send-text/', this.sendSms)
        .subscribe(response => {
          this.showToast('top-right', 'success','added successfully');
          console.log(response);
        }, (err) => {
          this.showToast('top-right', 'danger', err.message);
         console.log ('Oooops!',err);
        });
  }
  }
