import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AppConstants } from './../app.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void { }

  form: FormGroup;
  validForm: boolean = true;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private appConstants: AppConstants) {

    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const val = this.form.value;
    this.validForm = false;

    if (val.email && val.password) {
      this.authService.login(val.email, val.password).subscribe((data: any) => {
        if (data) {
          console.log("User is logged in");
          this.appConstants.accessToken = data.accessToken || '';
          this.appConstants.loggedInUser = data.user || {};

          window.localStorage.setItem("accessToken", this.appConstants.accessToken);
          window.localStorage.setItem("loggedInUsername", this.appConstants.loggedInUser.name);
          window.localStorage.setItem("loggedInUserid", this.appConstants.loggedInUser.id.toString());
          this.validForm = true;

          this.router.navigateByUrl('/mmania/movies-list');
        }
      });
    }

  }

}
