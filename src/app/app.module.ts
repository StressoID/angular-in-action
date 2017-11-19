import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { LocalStorageService } from './local-storage.service';
import { TestComponent } from './test/test.component';
import { MyObservableComponent } from './my-observable/my-observable.component';
import { MyObservableService } from './my-observable/my-observable.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    TestComponent,
    MyObservableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ LocalStorageService, MyObservableService, HttpService ],
  bootstrap: [AppComponent],
  entryComponents: [ TestComponent ]
})
export class AppModule { }
