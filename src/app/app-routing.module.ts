import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {AboutComponent} from './about/about.component';
import {PricingPageComponent} from './pricing/pricing-page/pricing-page.component';
import {BlogPageComponent} from './blog/blog-page/blog-page.component';
import {BlogDetailComponent} from './blog/blog-detail/blog-detail.component';
import {AdsComponent} from './ads/ads.component';
import {ContactComponent} from './contact/contact.component';
import {PrivacyPolicyComponent} from './privacy-policy/privacy-policy.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'about', component: AboutComponent},
  {path: 'pricing', component: PricingPageComponent},
  {path: 'blog', component: BlogPageComponent},
  {path: 'blog/child-a', component: BlogDetailComponent},
  {path: 'ads', component: AdsComponent},
  {path: 'portfolio', component: AdsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
