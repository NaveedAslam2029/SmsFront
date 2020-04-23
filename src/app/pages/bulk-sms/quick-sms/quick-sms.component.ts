import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../service/contact.service';

@Component({
  selector: 'quick-sms',
  templateUrl: './quick-sms.component.html',
  styleUrls: ['./quick-sms.component.scss']
})
export class QuickSmsComponent implements OnInit {
  countries: any;

  constructor(private service: ContactService) { }

  ngOnInit() {
    this.service.getcountry().subscribe(
      data => {
         console.log(data);
       this.countries = data;
    console.log(this.countries);
  });
  }
}
