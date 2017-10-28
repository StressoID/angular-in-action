import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SomeInputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    MainRoutingModule,
  ],
  declarations: [
    MainComponent,
    SomeInputComponent,
    OutputComponent,
  ],
})
export class MainModule {
}
