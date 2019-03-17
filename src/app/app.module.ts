import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AppErrorHandler } from './handler/error-handler.service';
import { HttpClientModule } from '@angular/common/http';
import { ShadowComponent } from './shadow/shadow.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ShadowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
