import { Component } from '@angular/core';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
  //providers: [UserService]
})
export class AdminComponent {
  name: string = '';
  gender: string = 'Male';
  subType: string = 'Yearly';
  status: string = 'Active';

  constructor(private userService: UserService){

  }
  


  CreateNewUser(){
    this.userService.CreateUser(this.name,this.gender,this.subType,this.status);
    console.log(this.userService.users);
    
  }


}
