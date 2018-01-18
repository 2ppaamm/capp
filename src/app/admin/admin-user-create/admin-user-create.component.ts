import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'ag-admin-user-create',
  templateUrl: './admin-user-create.component.html',
  styleUrls: ['./admin-user-create.component.css']
})
export class AdminUserCreateComponent implements OnInit {

  userForm: FormGroup;
  static isValidEmail(control: FormControl) {
    let email_regexp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

	return email_regexp.test(control.value) ? null : {
	  invalidEmail: true
	};
  }  
  constructor(fb: FormBuilder) {
    this.userForm = fb.group({
    email: fb.control('', [Validators.required, Validators.minLength(3), AdminUserCreateComponent.isValidEmail]),
    firstname:fb.control('', [Validators.required, Validators.minLength(3)]),
    lastname:fb.control('', [Validators.required, Validators.minLength(3)]),
    password: fb.control('', [Validators.required, Validators.minLength(6)])
	  });
  }

  ngOnInit() {
  }
  createUser() {
    console.log(this.userForm.value);
  }

}
