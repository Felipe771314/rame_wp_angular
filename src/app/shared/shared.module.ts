import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedesSocialesComponent } from './components/redes-sociales/redes-sociales.component';
import { CardComponent } from './components/card/card.component';
import { NewsComponent } from './components/news/news.component';
import { SliderComponent } from './components/slider/slider.component';
import { BtnWhatsappComponent } from './components/btn-whatsapp/btn-whatsapp.component';
import { SkeletonElementsModule } from 'skeleton-elements/angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { PruebaComponent } from './components/prueba/prueba.component';



@NgModule({
  declarations: [
    RedesSocialesComponent,
    CardComponent,
    NewsComponent,
    SliderComponent,
    BtnWhatsappComponent,
    PruebaComponent
  ],
  imports: [
    CommonModule,
    SkeletonElementsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    SlickCarouselModule

  ],
  exports: [
    RedesSocialesComponent,
    CardComponent,
    NewsComponent,
    SliderComponent  ]
})
export class SharedModule { }
