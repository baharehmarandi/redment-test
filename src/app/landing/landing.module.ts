import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    HeaderComponent
  ],
  exports: [
    LandingPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LandingModule { }
