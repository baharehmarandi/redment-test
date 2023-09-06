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
import { FooterComponent } from './components/footer/footer.component';
import { ScrollUpComponent } from './components/scroll-up/scroll-up.component';
import { MobileFooterComponent } from './components/mobile-footer/mobile-footer.component';



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
    BlogComponent,
    FooterComponent,
    ScrollUpComponent,
    MobileFooterComponent
  ],
  exports: [
    LandingPageComponent
  ],
    imports: [
        CommonModule,
    ]
})
export class LandingModule { }
