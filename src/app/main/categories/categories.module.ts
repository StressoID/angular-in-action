import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { SharedModule } from '../../shared/shared.module';
import { DetailCategoryComponent } from './detail-category/detail-category.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    CategoriesRoutingModule,
  ],
  declarations: [CategoriesComponent, DetailCategoryComponent],
})
export class CategoriesModule {
}
