# Introduction
I have created this project to share my knowledge about angular. It consists of two pages: A consent collectoin form; where user enter consent data. A consent management; where user can see the list of consents with pagination.     

<img src="https://user-images.githubusercontent.com/15572545/147866734-bbe578ab-6cee-4ff7-9233-2225b7ed63ee.png" width="90%" />

<img src="https://user-images.githubusercontent.com/15572545/147866723-80ba8887-389f-4216-b87a-d4f24e769656.png" width="90%" />

&nbsp;

# Technologies

- [Angular](https://angular.io/)
- [NgRx](https://ngrx.io/)

## Testing And Documentation

- [Jesmin](https://jasmine.github.io/)
- [Compodoc](https://compodoc.app/)

# Installation, development and usage

## Dependencies
Run `npm install` to install all the required dependencies.

## Development server

Run `ng serve` or `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` or `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

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

## Compodoc

To open Compodoc, use `npm run compodoc`.

# Application Architecture

## Structure

Here is the code structure.

```
src/
    app/
        core/
            components/
              component-name
            controls
              control-name
        feature-name
            feature-page/
            feature-module/
            feature-routing/
        services/
        dto/
        enums/
        http-interceptors/
        store/
```

#### Core folder

Contains the common/shared components of the application, like a UI Library.

#### Feature folder

Contains all the different features of the project.

#### Store Folder 
Each feature has its store, with actions, reducers, selectors and effects:

```
store/
    actions/
        feature.actions.ts
    effects/
        feature.effects.ts
    reducers/
        index.ts
        feature.reducers.ts
    selectors/
        feature.selectors.ts
```


## Style
Follows the [BEM](http://getbem.com/introduction/) methodology for structuring
components and naming the CSS classes.
