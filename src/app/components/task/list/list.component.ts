import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Tasks } from 'src/app/class/Tasks';
import { TaskService } from '../../../services/task.service'
import { ShowComponent } from '../show/show.component';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Output() refreshEmitter = new EventEmitter<boolean>();
  tasks : Tasks[] = [];
  searchBox!: string;



  constructor(private ts: TaskService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getTasks();
    this.tasks = [
      {
        id: '',
        title: '',
        type: '',
        dueDate: new Date,
        description: '',
        completed:false,
      }
    ]
  }
  getTasks() {
    this.ts.getTaskList().subscribe
    (
      (res)=> {
        this.tasks = res;
      },
      (error) => {
        console.log("Error on the Board" + error);
      }
      )
    }


  onOpenDialog(task: Tasks) {
    const dialogRef = this.dialog.open(ShowComponent, {
      data: task,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getTasks();
      this.refreshEmitter.emit(true);
    });
  }






  // tasks : Tasks[] = [];
  // searchBox!: string;
  // // tasks = [{title: 'test'}];
  // constructor(private ts : TaskService, public dialog: MatDialog) { }

  // ngOnInit(): void {
  //   this.ts.getTasks().subscribe
  //   (
  //     (res)=> {
  //       this.tasks = res;
  //     },
  //     (error) => {
  //       console.log("Error on the Board" + error);

  //     }
  //   )
  // }



  // onOpenDialog(task:Tasks) {
  //   const dialogRef = this.dialog.open(ShowComponent,  {
  //     data: task
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     this.ts.getTasks().subscribe
  //     (
  //       (res)=> {
  //         this.tasks = res;
  //       },
  //       (error) => {
  //         console.log("Error on the Board" + error);

  //       }
  //     )
  //   })
  // }

}
