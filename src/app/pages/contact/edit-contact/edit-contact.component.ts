import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactService } from '../../service/contact.service';
import { HttpClient } from '@angular/common/http';
import { ContactModel } from '../contact.model';
import { environment } from '../../../../environments/environment';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {
  contact:ContactModel;
  isLoading: boolean = false;
  index: number;
  
  constructor(public http: HttpClient,
    private service: ContactService , private router: Router,private route: ActivatedRoute, private toastrService: NbToastrService) { }


    showToast(position, status, message) {
      this.index += 1;
      this.toastrService.show(status || "Success", message, { position, status });
    }
 // on off loader
    toggleLoader(value?) {
      console.log("loader", value);
      this.isLoading = !this.isLoading;
    }
  ngOnInit() {
    this.toggleLoader();
    this.http
      .get(
        environment.backendUrl +
          "/Contact/getByUserId/" +
          this.route.snapshot.params.id
      )
      .subscribe((res: any) => {
        this.toggleLoader();
        // res[0].image= this.url+res[0].image;
        this.contact = res[0];
        console.log("get by id", res);
      });
    if (this.contact) {
    } else {
      this.contact = new ContactModel();
    }
  }
  updateList(navigate = true){
    debugger
    this.toggleLoader();
    this.http
      .put(
        environment.backendUrl +
          "/Contact/update/" +
          this.route.snapshot.params.id,
        this.contact
      )
      .subscribe(
        (res: any) => {
          this.toggleLoader();
          console.log("navigatess", navigate);
          if (navigate) {
            this.router.navigate(["pages/contact/contact-list/"]);
          }

          this.showToast("top-right", "success", "Updated successfully");
        },
        err => {
          this.toggleLoader();
          this.showToast("top-right", "danger", err.message);
          console.log("Oooops!", err);
        }
      );
  }
}
