import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataShareService } from '../services/data-share.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class RouteGuard implements CanActivate {

  constructor(
    private _router: Router,
    private _spinner: NgxSpinnerService,
    private _dataShare: DataShareService
  ) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this._spinner.show();
    if (this._dataShare['loggedInUserDetails']) {
      return true;
    } else {
      this._spinner.hide();
      this._router.navigate(['/home/login']);
      return false;
    }
  }

}
