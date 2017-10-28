import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login-user', pathMatch: 'full' },
  { path: 'login-user', loadChildren: 'app/login/login.module#LoginModule' },
  {
    path: 'main',
    canLoad: [AuthGuard],
    loadChildren: 'app/main/main.module#MainModule',
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {
}
