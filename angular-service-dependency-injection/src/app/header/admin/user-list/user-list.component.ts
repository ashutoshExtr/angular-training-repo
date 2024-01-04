import { Component } from '@angular/core';
import { UserService } from '../../../Services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
  //providers: [UserService]
  // if we use provider here, it is creating a different instance in admin component as well as different instance in userlist.
  // now if we use admin component instance, the same instance will be injected to all its child componets (in this case user-list component)
  // we can use it in app module class as well
})
export class UserListComponent {

  constructor(private userService: UserService){

  }

  userList = this.userService.GetAllUsers();
}
