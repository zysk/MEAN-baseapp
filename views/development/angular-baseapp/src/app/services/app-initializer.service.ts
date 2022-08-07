import { Injectable, OnDestroy } from '@angular/core';
import { ApiConfigService } from './api-config.service';
import { HttpClientRequestService } from './http-client-request.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DataShareService } from './data-share.service';
import { Router } from '@angular/router';

@Injectable()
export class AppInitializerService implements OnDestroy {

  private _destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private _router: Router,
    private _apiConfig: ApiConfigService,
    private _dataShare: DataShareService,
    private _httpClient: HttpClientRequestService
  ) { }

  // Get required data when application starts
  getRequiredData(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient.getRequest(this._apiConfig['API']['loggedInUser']).pipe(takeUntil(this._destroy$)).subscribe((response: any) => {
        if (response['status'] == 'Success') {
          this._dataShare['loggedInUserDetails'] = JSON.parse(JSON.stringify(response['response_body']));
          resolve(true);
        } else {
          resolve(true);
          this._router.navigate(['/home/login']);
        }
      },
      error => {
        resolve(error);
        this._router.navigate(['/home/login']);
      });
    });
  }

  // Unsubscribe from the subject itself
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
  }
}
