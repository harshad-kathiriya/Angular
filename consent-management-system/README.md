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
SideNavComponent
    √ should create
  ListConsentsComponent
    √ should get next page
    √ should create
    √ should get previous page
    √ should change page
    √ should get pagination data
  ButtonComponent
    √ should create
  PaginationComponent
    √ should get second page
    √ should get fourth page
    √ should get last page
    √ should disable prev button
    √ should create
    √ should disable next button
    √ should change page
    √ should get first page
    √ should get prev page
    √ should get total pages
    √ should get next page
  GiveConsentComponent
    √ name should be required field
    √ should submit the form
    √ email should be valid
    √ should disable button if aggrement is not selected
    √ should enable button if all aggrements are selected
    √ should create
    √ should enable button if aggrement is selected
  AppComponent
    √ should have as title 'Consent Management System'
    √ should create the app

Finished in 1.004 secs / 0.844 secs @ 18:58:52 GMT+0530 (India Standard Time)

SUMMARY:
√ 27 tests completed

=============================== Coverage summary ===============================
Statements   : 97.88% ( 139/142 )
Branches     : 73.27% ( 85/116 )
Functions    : 93.75% ( 30/32 )
Lines        : 98.44% ( 127/129 )
================================================================================
```
## Running end-to-end tests (will add later on)

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
