import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DataShareService } from 'src/app/services/data-share.service';
// import navigations from '../../../assets/dummy-json/navigation-links.json';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

  _currentURL: any;
  _activeIndex: any;
  _activeModule: any;
  _firstTimeOpen = true;
  _navigationLinks: any;
  _currentActiveIndex: any;
  _isSidebarExpanded: boolean = false;
  // _navigationLinks = navigations;
  private _destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    public _router: Router,
    public _activatedRoute: ActivatedRoute,
    public _dataShare: DataShareService
  ) {
    this._router.events.pipe(takeUntil(this._destroy$)).subscribe(event => {
      if (event instanceof NavigationStart) {
        this._currentURL = event.url;
      }
      if (event instanceof NavigationEnd) {
        // this.activeModule = this.activatedRoute.root.firstChild.snapshot.url[0].path;
        // this.navigationLinks.forEach((element, index) => {
        //   if (element.currentModule === this.activeModule) {
        //     this.currentActiveIndex = index;
        //   }
        // });
      }
    });
  }

  ngOnInit(): void {
    // To sort JSON data use this approach:
    // try {
    //   JSONDATA.sort((a, b) => a.Order.localeCompare(b.Order));
    // } catch (e) { }
   }

  // Unsubscribe from the subject itself
  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.unsubscribe();
  }

}
