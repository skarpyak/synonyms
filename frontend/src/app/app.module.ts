import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgButtonComponent } from './ng-button/ng-button.component';
import { NgSearchInputComponent } from './ng-search-input/ng-search-input.component';

@NgModule({
  declarations: [
    AppComponent,
    NgButtonComponent,
    NgSearchInputComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
