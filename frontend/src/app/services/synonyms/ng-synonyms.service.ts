import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { State, Store } from "@ngrx/store";
import { Model } from "../../models/synonyms.model";
import { CHANGE_SYNONYMS } from "../../reducers/synonyms";

const BASE_URL = 'http://localhost:4201/api/';

@Injectable()
export class NgSynonymsService {
  constructor(private _http: Http, private _store: Store<Model>) {

  }

  findSynonyms(word) {
    let apiLink = BASE_URL + 'words/' + word;
    return this._http.request(apiLink)
      .subscribe((res: Response) => {
        const response = res.json();
        this._store.dispatch({
          type: CHANGE_SYNONYMS,
          payload: response.body.synonyms
        });
    });
  }
}
