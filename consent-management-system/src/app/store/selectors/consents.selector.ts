import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ConsentsState } from "../redecuers/consents.reducer";

const consentsList = createFeatureSelector<ConsentsState>("consentsReducer");
export const getConsents = createSelector(consentsList, (state:ConsentsState) => state.consents);

