import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { Navbar1Component } from './navbar/navbar1/navbar1.component';
import { AppRoutingModuleModule } from './app-routing-module/app-routing-module.module';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    Navbar1Component,
    AcceuilComponent,
  ],
  imports: [BrowserModule,AppRoutingModuleModule,RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
