import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HeaderComponent } from './components/header/header.component';
import { DescriptionComponent } from './components/description/description.component';
import { MobileHeaderComponent } from './components/mobile-header/mobile-header.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    HeaderComponent,
    DescriptionComponent,
    MobileHeaderComponent
  ],
  exports: [
    LandingPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LandingModule { }
