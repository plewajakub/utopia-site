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
import { AdminProductsComponent } from './components/admin-panel/admin-products/admin-products.component';
import { AdminOverviewComponent } from './components/admin-panel/admin-overview/admin-overview.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeSiteComponent,
    StoreSiteComponent,
    NavbarComponent,
    StoreItemComponent,
    AdminPanelComponent,
    AdminProductsComponent,
    AdminOverviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
