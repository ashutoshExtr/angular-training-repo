import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { CourseService } from "./course.service";

export interface IDeactivateComponent{
    canExit: () => boolean | Observable<boolean> | Promise<boolean>;
}


@Injectable({
    providedIn: 'root',
})

//this file is about how to implement in angular 14 versions.
export class AuthGuardService implements CanActivate, CanActivateChild, CanDeactivate<IDeactivateComponent>{

    authService: AuthService = inject(AuthService);
    router: Router = inject(Router);
    courseService: CourseService = inject(CourseService);

    

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        boolean | Observable<boolean> | Promise<boolean>
    {
        if(this.authService.IsAuthenticated()){
            return true;
        }else{
            this.router.navigate(['/Login']);
            return false;
        }
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.canActivate(childRoute, state);
    }

    //this is not working need to check again
    canDeactivate(component: IDeactivateComponent, currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot, nextState: RouterStateSnapshot) 
    {
        return component.canExit();
        //return false;
    }
}