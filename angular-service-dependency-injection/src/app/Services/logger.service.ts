import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
//another way to do
export class LoggerService{
    LogMessage(name: string, status: string){
        console.log(`A new user with name ${name} with status ${status} is added to user list.`)
    }
}