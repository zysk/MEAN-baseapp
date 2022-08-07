import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routes/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './global-components/header/header.component';
import { FooterComponent } from './global-components/footer/footer.component';
import { SidebarComponent } from './global-components/sidebar/sidebar.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpIntercepterService } from './services/http-intercepter.service';
import { APP_BASE_HREF, LocationStrategy } from '@angular/common';
import { BaseUrlManagerService } from './services/base-url-manager.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SharedModule } from './modules/shared/shared.module';
import { AppInitializerService } from './services/app-initializer.service';
import { NotifyConnectionComponent } from './global-components/notify-connection/notify-connection.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NotifyConnectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  exports: [
    NgxSpinnerModule
  ],
  providers: [
    AppInitializerService,
    {
      provide: APP_INITIALIZER,
      useFactory: (_appInitializer: AppInitializerService) => () => _appInitializer.getRequiredData(),
      deps: [AppInitializerService],
      multi: true
    },
    /**
     * In order for my custom interceptor to be called, it has to be added to the list of all HTTP_INTERCEPTORS, which can be done that way in app.module.ts. Intercept all http request. You could have several different interceptors, which is the reason why we provide our interceptor service with the option multi: true. Interceptors are used basically if you want to add token with every http api request, if you want to check for api errors etc.
     */
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpIntercepterService,
      multi: true
    },
    /**
     * As I have used my custom implementation for the base url. I have to add the latest base url in APP_BASE_HREF so that Angular will know that okay, this is the base url now. I have to use this.
     */
    // {
    //   provide: APP_BASE_HREF,
    //   useValue: window.location.pathname
    // },
    /**
     * By default under Angular's LocationStrategy, it have PathLocationStrategy and HashLocationStrategy and by default Angular uses PathLocationStrategy. HashLocationStrategy has some abstract classes from where I have implemented one in my custom Service and given implementation for that. But Angular doesn't know about it until I tell explicitly. So I am registering my custom implementation under LocationStrategy. Why under LocationStrategy coz thats the main implementation of Angular Location Strategy. And I am telling Angular to use HashLocationStrategy instead of PathLocationStrategy in app-routing.module.ts.
     */
    // {
    //   provide: LocationStrategy,
    //   useClass: BaseUrlManagerService
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
