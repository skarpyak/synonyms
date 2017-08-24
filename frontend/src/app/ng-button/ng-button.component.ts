import { Component, OnInit, Input  } from '@angular/core';
import { CHANGE_SEARCH_WORD } from "../reducers/synonyms";
import {State, Store} from "@ngrx/store";
import { Model } from "../models/synonyms.model";
import { NgSynonymsService } from "../services/synonyms/ng-synonyms.service";

@Component({
  selector: 'app-ng-button',
  templateUrl: './ng-button.component.html',
  styleUrls: ['./ng-button.component.scss']
})
export class NgButtonComponent implements OnInit {
  @Input() synonym: string;

  constructor(
    private _store: Store<Model>,
    private _ngSynonymsService: NgSynonymsService) {

  }

  ngOnInit() {

  }

  onClick() {
    this._store.dispatch({
      type: CHANGE_SEARCH_WORD,
      payload: this.synonym
    });
    this._ngSynonymsService.findSynonyms(this.synonym)
  }
}
