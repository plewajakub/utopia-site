import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeSiteComponent } from './components/home-site/home-site.component';
import { StoreSiteComponent } from './components/store-site/store-site.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StoreItemComponent } from './components/store-site/store-item/store-item.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeSiteComponent,
    StoreSiteComponent,
    NavbarComponent,
    StoreItemComponent,
    AdminPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
