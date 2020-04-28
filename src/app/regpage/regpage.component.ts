
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from './../shared/users';
import { UserServiceService } from '../shared/user-service.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-regpage',
  templateUrl: './regpage.component.html',
  styleUrls: ['./regpage.component.css']
})
export class RegpageComponent implements OnInit {

  regForm: FormGroup;
  error: string;

  constructor(private formBuilder: FormBuilder,
              public userService: UserServiceService,
              public router: Router
  ) { }
  ngOnInit() {

    this.regForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required]],
      contact: ['', Validators.required, Validators.minLength(10)],
      password: ['', [Validators.required]],
      address: ['', ],
      role: ['', [Validators.required]],
      status: ['Pending']
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.regForm.controls; }

  addUser() {
    console.log('inside component constructor' + this.regForm.value);

    this.userService.createUser(this.regForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/'], { queryParams: { registered: true } });
        },
        error => {
          this.error = error;

        });

  }
}
