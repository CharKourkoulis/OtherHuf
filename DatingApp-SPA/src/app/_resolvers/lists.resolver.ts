import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { Observable, of } from 'rxjs';
import { AlertifyService } from '../_services/alertify.service';
import { tap, catchError } from 'rxjs/operators';


@Injectable()
export class ListsResolver implements Resolve<User[]> {

  pageNumber = 1;
  pageSize = 5;
  likesParam = 'Likers';

  constructor(
    private userService: UserService,
    private router: Router,
    private alertify: AlertifyService
    ) {}


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User[] | Observable<User[]> | Promise<User[]> {

    // tslint:disable-next-line: no-string-literal
    return this.userService.getUsers(this.pageNumber, this.pageSize, null, this.likesParam).pipe(
      tap((users) => {
        console.log(users);
      }),
      catchError(err => {
        this.alertify.error('Problem retrieving data');
        this.router.navigate(['/home']);
        return of(null);
      })
    );
  }

}
