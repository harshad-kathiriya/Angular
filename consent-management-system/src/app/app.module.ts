import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsentsModule } from './consents/consents.modules';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './core/core.modules';
import { HttpClientModule } from '@angular/common/http'
import { metaReducers, reducers } from './store/redecuers';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ConsentsService } from './services/consents.service';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [    
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    CoreModule,
    ConsentsModule,
    BrowserAnimationsModule
  ],
  providers: [
    Title,
    ConsentsService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
