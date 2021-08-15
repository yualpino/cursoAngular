import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiYpComponentsModule } from 'libs/ui-yp-components/src/public-api';
import { CommonModule } from "@angular/common";
import { AppComponent } from './app.component';
import { CardGroupTallerComponent } from './components/card-group-taller/card-group-taller.component';
//import { ButtonComponent } from '../../../../libs/ui-yp-components/src/lib/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    CardGroupTallerComponent//,
  //  ButtonComponent
  ],
  imports: [
    BrowserModule,
    UiYpComponentsModule,
    CommonModule
    
  ],
  exports:[
    CardGroupTallerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
