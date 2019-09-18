import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { ApiService } from 'app/services/api.service';
@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent implements OnInit {
  successMessage: String = '';

  constructor(   private formBuilder: FormBuilder,
    private flashMessagesService: FlashMessagesService,
    private api: ApiService,
    private router: Router) {

   
  this.api.active()
  
  .subscribe(
    data => {
  console.log(data);
     // localStorage.setItem('token', data.toString());
      //this._router.navigate(['/dash']);
    },
    error => this.successMessage = 'Email and Password does not match'
  );


  }

  ngOnInit() {
  }


  next(){
    this.router.navigate(['/registerdetails']);
  }
}