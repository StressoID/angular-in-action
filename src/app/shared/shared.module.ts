import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from './mat/mat.module';
import { MyToolbarComponent } from './components/my-toolbar/my-toolbar.component';
import { ExpansivePanelComponent } from './components/expansive-panel/expansive-panel.component';
import { NavigationComponent } from './components/my-toolbar/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatModule
  ],
  declarations: [
    MyToolbarComponent,
    ExpansivePanelComponent,
    NavigationComponent,
    SearchInputComponent
  ],
  exports: [
    MatModule,
    MyToolbarComponent,
    ExpansivePanelComponent,
    NavigationComponent,
    SearchInputComponent
  ]
})
export class SharedModule { }
