import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstName : string | undefined
  lastName : string | undefined
  username : string | undefined
  password : string | undefined

  constructor() { }

  ngOnInit(): void {
    this.firstName = ""
    this.lastName = ""
    this.username = ""
    this.password = ""
  }

  onSubmit(){
    console.log("First name = " + this.firstName)
    console.log("Last name = " + this.lastName)
    console.log("Username = " + this.username)
    console.log("Password = " + this.password)
  }

}
