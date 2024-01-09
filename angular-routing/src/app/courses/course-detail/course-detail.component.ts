import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Course } from '../../Models/course';
import { CourseService } from '../../Services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent implements OnInit,OnDestroy {
  selectedCourse: Course;
  courseId: number;

  courseService: CourseService = inject(CourseService);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  paramMapObs;

  ngOnInit(){
    // this.courseId =  this.activeRoute.snapshot.params['id'];
    //this will return the value stored in ID parameter


    //snapshot property returns only the initial value of route parameter. if route parameter changes, snapshot propertyu wont return the updated value. so we will use observable
    //this.courseId =  +this.activeRoute.snapshot.paramMap.get('id');
    //console.log(this.courseId);

    //everytime route value changes, param observable is going to emit that updated value
    // this.activeRoute.params.subscribe((data)=> {
    //   this.courseId = +data['id'];
    //   this.selectedCourse =   this.courseService.courses.find(course => course.id === this.courseId)
    // })

    this.paramMapObs =  this.activeRoute.paramMap.subscribe((data)=> {
      this.courseId = +data.get('id');
      this.selectedCourse =   this.courseService.courses.find(course => course.id === this.courseId)
    })

    //this.selectedCourse =   this.courseService.courses.find(course => course.id === this.courseId)
    
  }

  ngOnDestroy(){
    this.paramMapObs.unsubscribe();
  }
}
