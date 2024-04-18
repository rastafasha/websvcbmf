import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { BancuadradoComponent } from './bancuadrado/bancuadrado.component';
import { BanhorizontalComponent } from './banhorizontal/banhorizontal.component';
import { BanverticalComponent } from './banvertical/banvertical.component';

import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlModule } from 'ngx-owl-carousel';



@NgModule({
  declarations: [
    BancuadradoComponent,
    BanhorizontalComponent,
    BanverticalComponent,
  ],
  exports: [
    BancuadradoComponent,
    BanhorizontalComponent,
    BanverticalComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    CarouselModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule
    
  ]
})
export class BannerModule { }
