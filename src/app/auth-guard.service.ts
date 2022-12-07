import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const token = JSON.parse(sessionStorage.getItem('user'));

    if(token && this.isExpired()){

      return true;
    }

    this.router.navigate(['/']);
    return false;
  }


  isExpired(){
    const token = JSON.parse(sessionStorage.getItem('user'));
    const time = JSON.parse(atob(token.token.split('.')[1])).exp;
    const todayTime = new Date().getTime() / 1000;

    if(todayTime < time ){
      return true;
    }

    return false;
  }

}
