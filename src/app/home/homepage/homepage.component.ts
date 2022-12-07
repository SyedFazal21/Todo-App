import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {

  public taskList;

  constructor(private appService: AppService, private router: Router) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.appService.getTasks().subscribe((res) => this.taskList = res);
  }

  getStatus(status){
    if(status == 1){
      return "In Progress";
    }else if(status == 2){
      return "Pending";
    }else {
      return "Completed";
    }
  }

  editTask(id){
    this.router.navigate(['/task/' + id])
  }

}
