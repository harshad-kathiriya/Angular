
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as consentsReducer from '../redecuers/consents.reducer';

export interface State {
    consentsReducer: consentsReducer.ConsentsState
}

export const reducers: ActionReducerMap<State> = {
    consentsReducer: consentsReducer.consentsReducer
}

export const metaReducers: MetaReducer<State>[] = [];
