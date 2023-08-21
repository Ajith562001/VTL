import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './ReusableComponents/nav-bar/nav-bar.component';
import { NewImportsComponent } from './NewImports/new-imports/new-imports.component';
import { PageTwoComponent } from './NewImports/page-two/page-two.component';
import { Pendingimports1Component } from './PendingImports/pendingimports1/pendingimports1.component';
import { CompletedImportsComponent } from './completed-imports/completed-imports.component';
import { Admin1Component } from './Admin/admin1/admin1.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './Home/home-page/home-page.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NewImportsComponent,
    PageTwoComponent,
    Pendingimports1Component,
    CompletedImportsComponent,
    Admin1Component,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
