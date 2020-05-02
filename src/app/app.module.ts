import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlogComponent } from './blog/blog.component';
import { FaqComponent } from './faq/faq.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { NumberAchievementsComponent } from './number-achievements/number-achievements.component';
import { TestimonialItemComponent } from './testimonials/testimonial-item/testimonial-item.component';
import { MainComponent } from './main/main.component';
import { LoaderComponent } from './loader/loader.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { MailSignUpComponent } from './mail-sign-up/mail-sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    PricingComponent,
    BlogComponent,
    FaqComponent,
    TestimonialsComponent,
    NumberAchievementsComponent,
    TestimonialItemComponent,
    MainComponent,
    LoaderComponent,
    WhatWeDoComponent,
    MailSignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
