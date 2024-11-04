import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontEndComponent } from '../front-end/front-end.component';

const routes: Routes = [
  { path: 'search', component: FrontEndComponent },
  // { path: '', redirectTo: '/search', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
