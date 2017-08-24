import { ActionReducer, Action, State } from '@ngrx/store';
import { Model } from '../models/synonyms.model';

export const CHANGE_SEARCH_WORD = 'CHANGE_SEARCH_WORD';
export const CHANGE_SYNONYMS = 'CHANGE_SYNONYMS';

const initialState:Model = <Model>{
  word: '',
  synonyms: [],
  isLoaded: false
};

export function synonymsReducer(state = initialState, action: Action) {
  switch (action.type) {
    case CHANGE_SEARCH_WORD:
      const word = action.payload;
      return { ...state, word, isLoaded: false };
    case CHANGE_SYNONYMS:
      return { ...state, synonyms: action.payload, isLoaded: true };
    default:
      return state;
  }
}
