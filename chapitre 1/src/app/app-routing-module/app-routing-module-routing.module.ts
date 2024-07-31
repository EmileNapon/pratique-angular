import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Navbar1Component } from '../navbar/navbar1/navbar1.component';
import { AcceuilComponent } from '../acceuil/acceuil.component';
import { AppComponent } from '../app.component';

const routes: Routes = [
  {path:'nabar1',component:Navbar1Component},
  {path:'mmm',component:AcceuilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModuleRoutingModule { }
