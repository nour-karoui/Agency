import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogComponent} from './blog/blog.component';
import {MainComponent} from './main/main.component';
import {AboutComponent} from './about/about.component';
import {PricingPageComponent} from './pricing/pricing-page/pricing-page.component';
import {BlogPageComponent} from './blog/blog-page/blog-page.component';
import {BlogDetailComponent} from './blog/blog-detail/blog-detail.component';
import {AdsComponent} from './ads/ads.component';
import {ContactComponent} from "./contact/contact.component";


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'about', component: AboutComponent},
  {path: 'pricing', component: PricingPageComponent},
  {path: 'blog', component: BlogPageComponent},
  {path: 'blog/child-a', component: BlogDetailComponent},
  {path: 'ads', component: AdsComponent},
  {path: 'portfolio', component: AdsComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
