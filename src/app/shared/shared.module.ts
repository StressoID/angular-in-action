import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from './mat/mat.module';
import { MyToolbarComponent } from './components/my-toolbar/my-toolbar.component';
import { ExpansivePanelComponent } from './components/expansive-panel/expansive-panel.component';
import { NavigationComponent } from './components/my-toolbar/navigation/navigation.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatModule
  ],
  declarations: [
    MyToolbarComponent,
    ExpansivePanelComponent,
    NavigationComponent
  ],
  exports: [
    MatModule,
    MyToolbarComponent,
    ExpansivePanelComponent,
    NavigationComponent
  ]
})
export class SharedModule { }
