import { Component, OnInit, inject } from '@angular/core';
import { Course } from '../../Models/course';
import { CourseService } from '../../Services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent implements OnInit {
  selectedCourse: Course;
  courseId: number;

  courseService: CourseService = inject(CourseService);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(){
    // this.courseId =  this.activeRoute.snapshot.params['id'];
    //this will return the value stored in ID parameter

    this.courseId =  +this.activeRoute.snapshot.paramMap.get('id');
    //console.log(this.courseId);

    this.selectedCourse =   this.courseService.courses.find(course => course.id === this.courseId)
    
  }
}
