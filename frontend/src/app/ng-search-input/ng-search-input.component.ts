import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CHANGE_SEARCH_WORD } from "../reducers/synonyms";
import {State, Store} from "@ngrx/store";
import { Model } from "../models/synonyms.model";
import { NgSynonymsService } from "../services/synonyms/ng-synonyms.service";
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-ng-search-input',
  templateUrl: './ng-search-input.component.html',
  styleUrls: ['ng-search-input.component.scss'],
  providers: []
})
export class NgSearchInputComponent implements OnInit {
  public word: string;
  public ctrl: FormControl;

  constructor(
    private _store: Store<Model>,
    private _ngSynonymsService: NgSynonymsService) {
    _store.select('synonyms').subscribe(state => {
      const model = <Model>state;
      this.word = model ? model.word : '';
    });

    this.ctrl = new FormControl();
    this.ctrl.valueChanges
      .debounceTime(700)
      .subscribe(newValue => newValue && this._ngSynonymsService.findSynonyms(newValue));
  }

  ngOnInit() {

  }

  onChange(value)  {
    this._store.dispatch({
      type: CHANGE_SEARCH_WORD ,
      payload: value
    });
  }
}
