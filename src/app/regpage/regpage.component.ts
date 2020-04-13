
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-regpage',
  templateUrl: './regpage.component.html',
  styleUrls: ['./regpage.component.css']
})
export class RegpageComponent implements OnInit {

  @Input() userDetails = { name: ' ', age: '', email: '', contact: '', password: '', address: '' };

  constructor(
    public restApi: RestApiService,
    public router: Router
  ) { }
  ngOnInit() { console.log('inside component constructor'); }

  addUser() {
    console.log('inside component constructor');
    const data = {
      name: this.userDetails.name,
      age: this.userDetails.age
    };
    this.restApi.createUser(data).subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/home']);
        },
        error => {
          console.log(error);
        });
  }
}
