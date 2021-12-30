# Consent Management System

### 1. Consent collection form

A form that allows a user to enter her name, email address and to select data processes that she agrees to.

![Mockup](https://github.com/harshad-kathiriya/Angular-Projects/blob/main/consent-management-system/screenshots/give-consent.png)


### 2. Consent management

A list of consents that were given by users. This view simply displays items from a list with client-side pagination.

![Mockup](https://github.com/harshad-kathiriya/Angular-Projects/blob/main/consent-management-system/screenshots/consents.png)


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Here is the list of unit test write down for this app.

```sh
  ButtonComponent
    √ should create
  SideNavComponent
    √ should create
  GiveConsentComponent
    √ should disable button if aggrement is not selected
    √ should enable button if aggrement is selected
    √ should submit the form
    √ should create
    √ should enable button if all aggrements are selected
    √ name should be required field
    √ email should be valid
  ListConsentsComponent
    √ should change page
    √ should get next page
    √ should get pagination data
    √ should get previous page
    √ should create
  AppComponent
    √ should have as title 'Consent Management System'
    √ should create the app
  PaginationComponent
    √ should disable prev button
    √ should get first page
    √ should get second page
    √ should disable next button
    √ should get last page
    √ should change page
    √ should get fourth page
    √ should get next page
    √ should create
    √ should get total pages
    √ should get prev page

Finished in 1.415 secs / 1.109 secs @ 14:20:35 GMT+0530 (India Standard Time)

SUMMARY:
√ 27 tests completed

=============================== Coverage summary ===============================
Statements   : 97.94% ( 143/146 )
Branches     : 73.27% ( 85/116 )
Functions    : 93.75% ( 30/32 )
Lines        : 98.48% ( 130/132 )
================================================================================

```
## Running end-to-end tests (will add later on)

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
