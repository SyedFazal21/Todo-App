import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './auth-guard.service';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { TaskComponent } from './home/task/task.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'register', component: SignupComponent },
  {
    path: 'home',
    component: HomepageComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'task', component: TaskComponent, canActivate: [AuthGuardService] },
  { path: 'task/:id', component: TaskComponent, canActivate: [AuthGuardService] },
  { path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
