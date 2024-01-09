import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { CourseService } from "./course.service";

@Injectable({
    providedIn: 'root',
})
export class AuthGuardService implements CanActivate{

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
}