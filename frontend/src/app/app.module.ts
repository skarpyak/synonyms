import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from "@ngrx/store";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NgButtonComponent } from './ng-button/ng-button.component';
import { NgSearchInputComponent } from './ng-search-input/ng-search-input.component';
import { synonymsReducer } from "./reducers/synonyms";
import { NgSynonymsService } from "./services/synonyms/ng-synonyms.service";

@NgModule({
  declarations: [
    AppComponent,
    NgButtonComponent,
    NgSearchInputComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.provideStore({ synonyms: synonymsReducer })
  ],
  providers: [
    NgSynonymsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
