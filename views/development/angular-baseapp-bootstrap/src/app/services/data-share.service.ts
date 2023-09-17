import { Injectable, OnDestroy } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiConfigService } from './api-config.service';
import { Router } from '@angular/router';
import { HttpClientRequestService } from './http-client-request.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataShareService implements OnDestroy  {

  /**
   * This service can be used to share data across application.
   */

  showAlert = false;
  sidebarActive = true;
  loggedInUserDetails: any;
  private _destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private _router: Router,
    private _spinner: NgxSpinnerService,
    private _apiConfig: ApiConfigService,
    private _httpClient: HttpClientRequestService
  ) { }

  // Logout user, clear local storage and redirect to login route
  logout(): void {
    this._spinner.show();
    this._httpClient.postRequest(this._apiConfig['API']['logout']).pipe(takeUntil(this._destroy$)).subscribe((response: any) => {
      localStorage.clear();
      this.loggedInUserDetails = undefined;
      this._spinner.hide();
      this._router.navigate(['/home/login']);
    });
  }

  // Unsubscribe from the subject itself
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
    localStorage.clear();
  }
}
