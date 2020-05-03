import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {BlogPageComponent} from './blog/blog-page/blog-page.component';
import {BlogDetailComponent} from './blog/blog-detail/blog-detail.component';
import {AdsComponent} from './ads/ads.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'blog', component: BlogPageComponent},
  {path: 'blog/child-a', component: BlogDetailComponent},
  {path: 'ads', component: AdsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
