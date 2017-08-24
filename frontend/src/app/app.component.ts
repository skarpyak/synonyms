import { Component, ViewEncapsulation } from '@angular/core';
import {State, Store} from "@ngrx/store";
import { Model } from "./models/synonyms.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'synonymss';
  public model;

  constructor(private _store: Store<Model>) {
    _store.select('synonyms').subscribe(state => this.model = state);
  }

  isShowNoResults() {
    const { isLoaded, synonyms } = this.model;

    return (isLoaded && !synonyms.length);
  }
}
