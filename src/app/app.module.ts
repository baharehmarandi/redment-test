import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {LandingModule} from "./landing/landing.module";
import { SafeHtmlPipe } from './pipes/safe-html.pipe';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        LandingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
