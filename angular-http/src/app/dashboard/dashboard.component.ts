import { Component, inject, OnInit } from '@angular/core';
import { Task } from '../Model/Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  showCreateTaskForm: boolean = false;

  http: HttpClient = inject(HttpClient);

  allTasks: Task[] = [];

  ngOnInit(){
    this.FetchAllTasks();
  }

  OpenCreateTaskForm(){
    this.showCreateTaskForm = true;
  }

  CloseCreateTaskForm(){
    this.showCreateTaskForm = false;
  }

  CreateTask(data: Task){
    // console.log('Dashboard: ' + data);
    // console.log(data);

    const headers = new HttpHeaders({'my-header' : 'hello-world'});
    
    this.http.post<{name:string}>(
      'https://angular-http-213b3-default-rtdb.firebaseio.com/tasks.json',
       data, { headers: headers} )
    .subscribe((response) => {
      console.log(response);
      this.FetchAllTasks();
    });
  }

  private FetchAllTasks() {
    this.http.get<{[key: string]:  Task}>(
      'https://angular-http-213b3-default-rtdb.firebaseio.com/tasks.json'
      ).pipe(map((response) => {
        let tasks = [];

        for(let key in response) {
          if(response.hasOwnProperty(key)){
            tasks.push({...response[key], id: key});
          }
        }
        return tasks;

      }))
      .subscribe((tasks) => {
        this.allTasks = tasks;
        // console.log(tasks);
      })
  }


  FetchAllTasksClicked() {
    this.FetchAllTasks();
  }
}
