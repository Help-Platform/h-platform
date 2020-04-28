import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../shared/user-service.service';
import { Users } from '../shared/users';

@Component({
  selector: 'app-usersdailog',
  templateUrl: './usersdailog.component.html',
  styleUrls: ['./usersdailog.component.css']
})
export class UsersdailogComponent implements OnInit {

  constructor(private userService: UserServiceService) { }

  headers = ["Name","Contact","email", "Address", "Post", "Status", "role", "Type"];
  tabledata = ['name', "contact", "email", "address", "post", "status", "role","type"];

  users: Users[] = [];

  //headers = ["ID", "Name", "Age", "Gender", "Country"];

 /*rows = [
    {
      "ID" : "1",
      "Name" : "Rahul",
      "Age" : "21",
      "Gender" : "Male",
      "Country" : "India"
    },
    {
      "ID" : "2",
      "Name" : "Ajay",
      "Age" : "25",
      "Gender" : "Male",
      "Country" : "India"
    },
    {
      "ID" : "3",
      "Name" : "Vikram",
      "Age" : "31",
      "Gender" : "Male",
      "Country" : "Australia"
    },
    {
      "ID" : "4",
      "Name" : "Riya",
      "Age" : "20",
      "Gender" : "Female",
      "Country" : "India"
    },
    {
      "ID" : "5",
      "Name" : "John",
      "Age" : "23",
      "Gender" : "Male",
      "Country" : "USA"
    },
    {
      "ID" : "6",
      "Name" : "Raman",
      "Age" : "27",
      "Gender" : "Male",
      "Country" : "India"
    },
    {
      "ID" : "7",
      "Name" : "Mohan",
      "Age" : "39",
      "Gender" : "Male",
      "Country" : "India"
    },
    {
      "ID" : "8",
      "Name" : "Shreya",
      "Age" : "21",
      "Gender" : "Female",
      "Country" : "India"
    }
  ] */



  ngOnInit(): void {

      this.userService.getAllUsers().subscribe
     (
       (data) =>
       {
         this.users = data;
       },
       (error) => console.log(error)
     )



}
}
