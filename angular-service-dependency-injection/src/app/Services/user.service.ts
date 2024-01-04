import { EventEmitter, Injectable } from "@angular/core";
import { User } from "../../Models/User";
import { LoggerService } from "./logger.service";

@Injectable()
//if we want to inject something
//use injectable on the receiving service
//NOTE:  IT IS RECOMMENDED TO ADD INJECTABLE TO ALL THE SERVICES
export class UserService{
    users: User[] = [
        new User('Steve Smith', 'Male', 'Monthly', 'Active'),
        new User('Mery Jane', 'Female', 'Yearly', 'Inactive'), 
        new User('Mark Tyler', 'Male', 'Quaterly', 'Active') 
    ];

    //how to inject
    constructor(private logger: LoggerService){

    }


    OnUserDetailClicked: EventEmitter<User> = new EventEmitter<User>();

    OnShowUserDetails(user: User){
        this.OnUserDetailClicked.emit(user);
    }
    
    GetAllUsers(){
        return this.users;
    }

    CreateUser(name: string, gender: string, subType: string, status: string){
        let user = new User(name, gender, subType, status);
        this.users.push(user);
        //this.logger.LogMessage(name, status);
        //let logger = new LoggerService();
        //logger.LogMessage(name, status);
        // if we use this we are tightly coupling with userservice and loggerservice. we want angular to inject a loggerservice to the userservice class
        
        this.logger.LogMessage(name, status);

    }
}