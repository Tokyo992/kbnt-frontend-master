import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tasks, TaskTypeOption } from 'src/app/class/Tasks';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  isActive!: true;
  taskForm!: FormGroup;
  typeOptions: Array<TaskTypeOption> = [];

  constructor(
    private fb:FormBuilder,
    private ts: TaskService,
    private router: Router) { }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      dueDate: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.typeOptions = this.ts.getTypeOptions();


  }


  addTask() {
    this.ts.postTask(this.taskForm.value).subscribe(
      (d) => {
      console.log(d);
      this.router.navigateByUrl('/');
    },
    (error) => {
      console.log(error);

    });
  }

}
