import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogComponent} from './blog/blog.component';
import {MainComponent} from './main/main.component';
import {AboutComponent} from "./about/about.component";
import {PricingComponent} from "./pricing/pricing.component";
import {PricingPageComponent} from "./pricing/pricing-page/pricing-page.component";


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'about', component: AboutComponent},
  {path: 'pricing', component: PricingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
