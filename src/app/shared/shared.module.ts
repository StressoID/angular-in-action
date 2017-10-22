import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from './mat/mat.module';
import { MyToolbarComponent } from './components/my-toolbar/my-toolbar.component';
import { ExpansivePanelComponent } from './components/expansive-panel/expansive-panel.component';

@NgModule({
  imports: [
    CommonModule,
    MatModule
  ],
  declarations: [
    MyToolbarComponent,
    ExpansivePanelComponent
  ],
  exports: [
    MatModule,
    MyToolbarComponent,
    ExpansivePanelComponent
  ]
})
export class SharedModule { }
