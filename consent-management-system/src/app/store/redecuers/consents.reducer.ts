import { createReducer, on, State } from "@ngrx/store";
import { ConsentsDTO } from "src/app/DTO/ConsentsDTO";
import { AddConsents, AddConsentsFail, AddConsentsSuccess, GetConsents, GetConsentsFail, GetConsentsSuccesss } from "../actions";

export interface ConsentsState {
    consents: ConsentsDTO[],
    loading: boolean
}

export const initialState: ConsentsState = {
    consents: [],
    loading: false
};

export const consentsReducer = createReducer(
    initialState,
    on(AddConsents, state => ({...state, loading: true}) ),
    on(AddConsentsSuccess, state => ({...state, loading: false})),
    on(AddConsentsFail, state => ({...state, loading: false })),
    
    on(GetConsents, state => ({...state, loading: true })),
    on(GetConsentsSuccesss, (state,{ payload }) => ({...state, consents: payload, loading: false })),
    on(GetConsentsFail, state => ({...state, loading: false }))
    
);

