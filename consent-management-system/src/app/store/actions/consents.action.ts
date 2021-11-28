import { createAction, props } from "@ngrx/store";
import { ConsentsDTO } from "src/app/DTO/ConsentsDTO";

export enum ConsentActionTypes {
    ADD_CONSENTS = '[CMS] ADD_CONSENTS',
    ADD_CONSENTS_SUCCESS = '[CMS] ADD_CONSENTS_SUCCESS',
    ADD_CONSENTS_FAIL = '[CMS] ADD_CONSENTS_FAIL',

    GET_CONSENTS = '[CMS] GET_CONSENTS',
    GET_CONSENTS_SUCCESS = '[CMS] GET_CONSENTS_SUCCESS',
    GET_CONSENTS_FAIL = '[CMS] GET_CONSENTS_FAIL'    
}

export const AddConsents = createAction(
    ConsentActionTypes.ADD_CONSENTS,
    props<{ payload: ConsentsDTO}>()
);

export const AddConsentsSuccess = createAction(
    ConsentActionTypes.ADD_CONSENTS_SUCCESS,
    props<{ payload: ConsentsDTO}>()
);

export const AddConsentsFail = createAction(
    ConsentActionTypes.ADD_CONSENTS_FAIL,
    props<{ payload: any}>()
);
export const GetConsents = createAction(
    ConsentActionTypes.GET_CONSENTS
);

export const GetConsentsSuccesss = createAction(
    ConsentActionTypes.GET_CONSENTS_SUCCESS,
    props<{ payload: ConsentsDTO[] }>()
);

export const GetConsentsFail = createAction(
    ConsentActionTypes.GET_CONSENTS_FAIL,
    props<{ payload: any }>()
);