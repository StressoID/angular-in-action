import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SomeInputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { OrdersComponent } from './orders/orders.component';
import { MainService } from './main.service';
import { MySuperDirective } from './my-super.directive';
import { OrdersModule } from './orders/orders.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    OrdersModule,
    MainRoutingModule,
  ],
  declarations: [
    MainComponent,
    SomeInputComponent,
    OutputComponent,
  ],
  providers: [ MainService ]
})
export class MainModule {
}
