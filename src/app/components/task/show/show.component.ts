import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tasks, TaskTypeOption } from 'src/app/class/Tasks';
import { TaskService } from 'src/app/services/task.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  taskForm!: FormGroup;
  typeOptions: Array<TaskTypeOption> = [];

  constructor(
    public dialogRef: MatDialogRef<ShowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Tasks,
    private fb:FormBuilder,
    private taskService: TaskService
    ) { }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      dueDate: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.typeOptions = this.taskService.getTypeOptions();
    this.showTask();
  }

  showTask() {
    this.taskService.getTaskById(this.data.id).subscribe(
      (d: Tasks) => {
       this.taskForm .controls['title'].setValue(d.title);
       this.taskForm .controls['type'].setValue(d.type);
       this.taskForm .controls['dueDate'].setValue(
         new Date(d.dueDate)
         );
       this.taskForm .controls['description'].setValue(d.description);
      },
      (error) => console.error()
   );
  }
  updateTask() {
    this.taskService
    .updateTask(this.taskForm.value, this.data.id)
    .subscribe((d) => {
      console.log(d);
      this.dialogRef.close();
    },error => console.error(error));
  }
  onDeleteTask() {
    this.taskService
    .deleteTask(this.data.id)
    .subscribe((d) => {
      console.log(d);
      this.dialogRef.close();
    },error => console.error(error));
  }
}
