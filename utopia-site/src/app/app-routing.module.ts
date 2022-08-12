import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminOverviewComponent } from './components/admin-panel/admin-overview/admin-overview.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdminProductsComponent } from './components/admin-panel/admin-products/admin-products.component';
//import { HomeSiteComponent } from './components/home-site/home-site.component';
import { StoreItemComponent } from './components/store-site/store-item/store-item.component';
import { StoreSiteComponent } from './components/store-site/store-site.component';

const routes: Routes = [
  //{path: '', component: HomeSiteComponent},
  {path: '', component:StoreSiteComponent},
  {path: 'store/item/:id', component:StoreItemComponent},
  {path: 'admin', component:AdminPanelComponent, children: [ 
    {path: 'products', component:AdminProductsComponent},
    {path: '', component:AdminOverviewComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
