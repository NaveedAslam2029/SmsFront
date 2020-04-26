import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ContactModel } from '../contact.model';
import { ContactService } from '../../service/contact.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { ImportcontactsModel } from './Importcontacts';


@Component({
  selector: 'importcontact',
  templateUrl: './importcontact.component.html',
  styleUrls: ['./importcontact.component.scss']
})
export class ImportcontactComponent implements OnInit {
  @Output() onLoading:EventEmitter<any>=new EventEmitter();
  @Output() onFileUpload:EventEmitter<any>=new EventEmitter();
  contact:ContactModel;
  index: number;
  data: any;
  countries: any;
  importedContacts:ImportcontactsModel;
  listgroup: any;
  fileToImport:string;
  status: any[];
  formula:string = "Formula 1";
  constructor(public http: HttpClient,
    private router: Router, private service: ContactService,
    private toastrService: NbToastrService,
    private route: ActivatedRoute) { }

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
  this.service.getContact().subscribe(
    data => {
       console.log(data);
     this.listgroup = data;
  console.log(this.listgroup);
});
  }
  uploadfile = (mediaFiles:any) => {

    console.log("call")
         let formData: FormData = new FormData();
         formData.append("file", mediaFiles.target.files[0]);
 
         let uploadFilePath = environment.backendUrl + '/contactfile';
         this.onLoading.emit("true from file uploader");
         this.http.post(uploadFilePath, formData).subscribe((res:any)=>{
           console.log("success",res);
           this.fileToImport = res.originalname;
             this.onFileUpload.emit(res.filePath);
           return res;
         },err=>{
           console.log("err",err)
           return err
         })
   }
   importContacts(){
     let body = {
       fileName : this.fileToImport
     }
    let importContactsPath = environment.backendUrl + '/Contact/import_contacts';
    this.http.post(importContactsPath, body).subscribe((res:any)=>{
      console.log("success",res);
      this.fileToImport = res.originalname;
      this.router.navigateByUrl('/pages/contact/contact-list')
        // this.onFileUpload.emit(res.filePath);
      // return res;
    },err=>{
      console.log("err",err)
      return err
    })   }
  //  downloadCSV() {
  //   this.status = ["approved", "rejected", "pending"];
  //   var data = [
  //     {
  //       name: "Test 1",
  //       age: 13,
  //       average: 8.2,
  //       status: this.status[0],
  //       description: "Kuala Lmpuer, Malaysia"
  //     },
  //     {
  //       name: 'Test 2',
  //       age: 11,
  //       average: 8.2,
  //       status: this.status[1],
  //       description: "Jakarta, Indonesia"
  //     },
  //     {
  //       name: 'Test 3',
  //       age: 10,
  //       average: 8.2,
  //       status: this.status[2],
  //       description: "Bangkok, Thailand"
  //     },
  //   ];

  //   var options = {
  //     title: 'User Details',
  //     fieldSeparator: ',',
  //     quoteStrings: '"',
  //     decimalseparator: '.',
  //     showLabels: true,
  //     showTitle: true,
  //     useBom: true,
  //     headers: ['Name', 'Age', 'Average', 'Status', 'Address']
  //   };

  //   new Angular2Csv(data, this.formula, options);
  // }
  // importcontact(){
  //   
  //   this.http.post(environment.backendUrl+'/contactfile', this.contact)
  //       .subscribe(response => {
  //         this.showToast('top-right', 'success','added successfully');
  //         console.log(response);
  //       }, (err) => {
  //         this.showToast('top-right', 'danger', err.message);
  //        console.log ('Oooops!',err);
  //       });
  // }
}
