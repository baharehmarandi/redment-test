import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HeaderComponent } from './components/header/header.component';
import { DescriptionComponent } from './components/description/description.component';
import { MobileHeaderComponent } from './components/mobile-header/mobile-header.component';
import { ContactBtnComponent } from './components/contact-btn/contact-btn.component';
import { SpecialProductsComponent } from './components/special-products/special-products.component';
import { BannerComponent } from './components/banner/banner.component';
import { ExplorProductsComponent } from './components/explor-products/explor-products.component';
import {AppModule} from "../app.module";
import {SafeHtmlPipe} from "../pipes/safe-html.pipe";
import { BlogComponent } from './components/blog/blog.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    HeaderComponent,
    DescriptionComponent,
    MobileHeaderComponent,
    ContactBtnComponent,
    SpecialProductsComponent,
    BannerComponent,
    ExplorProductsComponent,
    SafeHtmlPipe,
    BlogComponent
  ],
  exports: [
    LandingPageComponent
  ],
    imports: [
        CommonModule,
    ]
})
export class LandingModule { }
