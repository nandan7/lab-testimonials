import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    TestimonialComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
