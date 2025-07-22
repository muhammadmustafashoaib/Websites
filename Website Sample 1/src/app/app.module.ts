import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './website-1/header/header.component';
import { HeroComponent } from './website-1/hero/hero.component';
import { AboutComponent } from './website-1/about/about.component';
import { ServicesComponent } from './website-1/services/services.component';
import { TestimonialsComponent } from './website-1/testimonials/testimonials.component';
import { ContactComponent } from './website-1/contact/contact.component';
import { FooterComponent } from './website-1/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
