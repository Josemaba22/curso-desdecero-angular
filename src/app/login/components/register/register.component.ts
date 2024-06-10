import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/registerService';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { User } from '../../interfaces/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../../pages/pages.component.css']
})
export class RegisterComponent implements OnInit{

  userForm: UntypedFormGroup = new UntypedFormGroup({})

  constructor( public registerService: RegisterService) { }

  ngOnInit() {
    this.userForm = new UntypedFormGroup({
      username: new UntypedFormControl(''),
      email: new UntypedFormControl(''),
      rol: new UntypedFormControl(''),
      password: new UntypedFormControl(''),
      confirmPass: new UntypedFormControl('')
    })


  }

  registerUser(): void {
    console.log(this.userForm.value);
    if (this.userForm.valid) {
      this.registerService.registerUser(
        this.userForm.value as User
      );
    }
  }
}
