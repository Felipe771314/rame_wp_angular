import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageService } from './services/homepage.service';
import { FormsModule } from '@angular/forms';
import { SkeletonElementsModule } from 'skeleton-elements/angular';
import { SlickCarouselModule } from 'ngx-slick-carousel';





@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    SkeletonElementsModule,
    SlickCarouselModule

  ],
  providers: [
    HomepageService,
    SkeletonElementsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
