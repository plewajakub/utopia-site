import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSiteComponent } from './components/home-site/home-site.component';
import { StoreItemComponent } from './components/store-site/store-item/store-item.component';
import { StoreSiteComponent } from './components/store-site/store-site.component';

const routes: Routes = [
  {path: '', component: HomeSiteComponent},
  {path: 'store', component:StoreSiteComponent},
  {path: 'store/item/:id', component:StoreItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
