import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { Course } from '../model/course';
import { ServicesService } from './../services/services.service';
import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {


  courses$ : Observable<Course[]>;
  displayedColumns = ['name', 'category']
  constructor( private coursesService : ServicesService, public dialog: MatDialog) {
    //this.courses = []
    this.courses$ = this.coursesService.list().pipe(
      catchError(error =>{
        this.onError('Erro ao carregar cursos.')
        return of([])
      })
    )

  }

  onError(errorMsg : string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }


  ngOnInit(): void {


  }

}
