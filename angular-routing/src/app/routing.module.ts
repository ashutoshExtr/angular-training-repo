import { NgModule } from "@angular/core";
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { PopularComponent } from './home/popular/popular.component';
import {  RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { AuthGuardService } from "./Services/authguard.service";
import { CanActivate, CanActivateChild } from "./auth.guard";



const routes:Routes = [
    { path: '', component: HomeComponent},
    //{ path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'Home', component: HomeComponent},
    { path: 'About', component: AboutComponent},
    { path: 'Courses', component: CoursesComponent, resolve: {courses: AuthGuardService}},
    //{ path: 'Courses/Course/:id', component: CourseDetailComponent},
    //creating child routes
    { path: 'Courses', canActivateChild:[CanActivateChild], children: [
      {path: 'Course/:id', component: CourseDetailComponent},
      {path: 'Popular', component: PopularComponent},
      {path: 'Checkout', component: CheckoutComponent}
    ]},
    { path: 'Contact', component: ContactComponent, canDeactivate: [(comp: ContactComponent) => {return comp.canExit();}]},
    {path: 'Login', component: LoginComponent},
    { path: '**', component: NotFoundComponent}, // wildcard route -  if none of the matches found then this will be displayed. This route should be added at the end
  ]





@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
})

export class RoutingModule{

}