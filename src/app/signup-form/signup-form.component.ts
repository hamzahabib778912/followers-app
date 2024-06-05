import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('',
      Validators.required,
      UsernameValidators.shouldBeUnique),
     password: new FormControl(),
    })
  })

  get username(){
    return this.form?.get('account.username')
  }
  login(){
    this.form.setErrors({
      invalidLogin: true
    })
  }

  constructor() { }

  ngOnInit(): void {
  }

}
