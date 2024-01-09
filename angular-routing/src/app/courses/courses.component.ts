import { Component, OnInit, inject } from '@angular/core';
import { Course } from '../Models/course';
import { CourseService } from '../Services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit{
  coursesService = inject(CourseService);
  AllCourses: Course[];
  searchString:string;


  activeRoute: ActivatedRoute = inject(ActivatedRoute);


  ngOnInit(){
    // this.searchString =   this.activeRoute.snapshot.queryParams['search'];
    
    //using snapshot, if we update later wont work, so we will use observables
    //this.searchString =   this.activeRoute.snapshot.queryParamMap.get('search');
    //console.log(this.searchString);


    // USING QUERY PARAMS
    // this.activeRoute.queryParams.subscribe((data) => {
    //   this.searchString =  data['search'];

    //   if(this.searchString === undefined || this.searchString === '' || this.searchString === null){
    //     this.AllCourses = this.coursesService.courses;
    //   } else{
    //     this.AllCourses =  this.coursesService.courses.filter(x => x.title.toLowerCase().includes(this.searchString.toLowerCase()));
    //   }

    // })




    this.activeRoute.queryParamMap.subscribe((data) => {
      this.searchString =  data.get('search');

      if(this.searchString === undefined || this.searchString === '' || this.searchString === null){
        this.AllCourses = this.coursesService.courses;
      } else{
        this.AllCourses =  this.coursesService.courses.filter(x => x.title.toLowerCase().includes(this.searchString.toLowerCase()));
      }
      
    }) 
    
  }
  // QUERY STRINGS ARE OPRTIONAL, ROUTE PARAMETER IS REQUIRED
}
