import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  public taskForm;
  public editMode = false;
  public taskId;

  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      description: ['', Validators.required],
      options: ['', Validators.required],
    });

    this.checkEditMode();
  }

  submitForm() {
    if (this.taskForm.invalid) return;

    if (this.editMode) {
      this.updateTask();
    } else {
      this.createTask();
    }
  }

  createTask() {
    this.appService
      .createTask(this.taskForm.value.description, this.taskForm.value.options)
      .subscribe((res) => {
        console.log(res);
      });
  }

  updateTask() {
    this.appService
      .updateTask(
        this.taskForm.value.description,
        this.taskForm.value.options,
        this.taskId
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  checkEditMode() {
    this.router.params.subscribe((res) => {
      this.taskId = res['id'];
      this.editMode = true;
    });

    if (this.editMode) {
      this.appService.getTaskById(this.taskId).subscribe((res: any) => {
        this.taskForm.controls['description'].setValue(res[0].task);
        this.taskForm.controls['options'].setValue(res[0].status);
      });
    }
  }
}
