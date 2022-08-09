import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClientRequestService } from 'src/app/services/http-client-request.service';
import { ApiConfigService } from 'src/app/services/api-config.service';
import { DataShareService } from 'src/app/services/data-share.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  private _destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private _router: Router,
    private _spinner: NgxSpinnerService,
    private _apiConfig: ApiConfigService,
    private _dataShare: DataShareService,
    private _httpClient: HttpClientRequestService
  ) { }

  ngOnInit(): void {
    this._spinner.hide();
  }

  /* Login API */
  login(): void {
    this._spinner.show();
    this._httpClient.postRequest(this._apiConfig['API']['login'], { username: '', password: '' }).pipe(takeUntil(this._destroy$)).subscribe((response: any) => {
      if (response['status'] === 'Success') {
        localStorage.setItem('access-token', response['response_body']['accessToken']);
        this.getLoggedInUserDetails();
      } else {
        Swal.fire({
          title: 'Oops',
          text: response['response_body']['message'],
          icon: 'error',
        });
        this._router.navigate(['/login']);
      }
    });
  }

  /* Fetch logged in user's data */
  getLoggedInUserDetails(): void {
    this._httpClient.getRequest(this._apiConfig['API']['loggedInUser']).pipe(takeUntil(this._destroy$)).subscribe((response: any) => {
      if (response['status'] === 'Success') {
        this._dataShare['loggedInUserDetails'] = response['response_body']['data'];
        this._router.navigate(['/home/provide-route']);
      } else {
        Swal.fire({
          title: 'Oops',
          text: response['response_body']['message'],
          icon: 'error',
        });
      }
    });
  }

  /* Unsubscribe from the subject itself */
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
  }

}
