import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeSiteComponent } from './components/home-site/home-site.component';
import { StoreSiteComponent } from './components/store-site/store-site.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StoreItemComponent } from './components/store-site/store-item/store-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeSiteComponent,
    StoreSiteComponent,
    NavbarComponent,
    StoreItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
