import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { UiYpComponentsComponent } from './ui-yp-components.component';
import { HeaderComponent } from './header/header.component';
import { CardGroupStockComponent } from './card-group-stock/card-group-stock.component';
import { CardStockComponent } from './card-stock/card-stock.component';
import { CardStockDetailComponent } from './card-stock-detail/card-stock-detail.component';


const MyComponents=[
  HeaderComponent,
  ButtonComponent,
  CardGroupStockComponent,
  CardStockComponent

]

@NgModule({
  declarations: [
    ...MyComponents,
    HeaderComponent,
    CardGroupStockComponent,
    CardStockComponent,
    CardStockDetailComponent
    //UiYpComponentsComponent
  ],
  imports: [
  ],
  exports: [
    ...MyComponents
    //UiYpComponentsComponent
  ]
})
export class UiYpComponentsModule { }
