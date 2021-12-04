import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';
import { ServicesService } from './../services/services.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {


  courses : Observable<Course[]>;
  displayedColumns = ['name', 'category']
  constructor( private coursesService : ServicesService) {
    //this.courses = []
    this.courses = this.coursesService.list()

  }

  ngOnInit(): void {


  }

}
