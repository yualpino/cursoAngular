import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiYpComponentsModule } from 'libs/ui-yp-components/src/public-api';

import { AppComponent } from './app.component';
//import { ButtonComponent } from '../../../../libs/ui-yp-components/src/lib/button/button.component';

@NgModule({
  declarations: [
    AppComponent//,
  //  ButtonComponent
  ],
  imports: [
    BrowserModule,
    UiYpComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
