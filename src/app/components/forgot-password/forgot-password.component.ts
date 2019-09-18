import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { ApiService } from 'app/services/api.service';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  myForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private flashMessagesService: FlashMessagesService,
    private api: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
  

    this.myForm = this.formBuilder.group({
      //controlname: ['initial value', rules]
    //  username: ['', [ Validators.required, Validators.minLength(4), Validators.maxLength(14) ]],
    newpassword: ['', [ Validators.required , Validators.minLength(4) ]],
      newcnfpass: ['', [ Validators.required, Validators.minLength(4) ]],
      email: ['', [ Validators.required, Validators.minLength(4) ]]
    });
  }
  abc() {
    console.log(this.myForm.value);


    localStorage.setItem("email",this.myForm.value.email)
    
        if (this.myForm.valid) {
  
         this.api.resetpassword(this.myForm.value)
            .subscribe(
              data => {
                console.log("reset password is succeeded");
                alert('Successfully updated yor new password!.');
             //   this.successMessage = 'Successfully updated yor new password!.';
         //    this. flashMessagesService.show('Success!', { cssClass: 'alert-success' } );
                // this._router.navigate(['/registerdetails']);
              
              },
              error =>    this. flashMessagesService.show('please try again later!', { cssClass: 'alert-danger' } )
        //  error => this.successMessage = 'Invalid Email Address'
        );
       alert('Successfully updated yor new password!.');
    }
    
  }

  isValid(controlName) {
    return this.myForm.get(controlName).invalid && this.myForm.get(controlName).touched;
  }

  passValidator(control: AbstractControl) {
    if (control && (control.value !== null || control.value !== undefined)) {
      const newcnfpassValue = control.value;

      const passControl = control.root.get('newpassword');
      if (passControl) {
        const passValue = passControl.value;
        if (passValue !== newcnfpassValue || passValue === '') {
          return {
            isError: true
          };
        }
      }
    }

    return null;
  }
}