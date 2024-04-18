import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// paginacion
import { NgxPaginationModule } from 'ngx-pagination';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BannerModule } from './banner/banner.module';

import { BlogHomeComponent } from './blog-home/blog-home.component';
import { DirectorioHomeComponent } from './directorio-home/directorio-home.component';
import { DocumentosSharedComponent } from './documentos-shared/documentos-shared.component';
import { FooterComponent } from './footer/footer.component';
import { GalleriaComponent } from './galleria/galleria.component';
import { HeaderComponent } from './header/header.component';
import { InstagComponent } from './instag/instag.component';
import { ModalComponent } from './modal/modal.component';
import { NoticiasHomeComponent } from './noticias-home/noticias-home.component';
import { FavoritosComponent } from './portal/favoritos/favoritos.component';
import { PerfilComponent } from './portal/perfil/perfil.component';
import { TimelineComponent } from './portal/timeline/timeline.component';
import { SliderPortalComponent } from './slider-portal/slider-portal.component';
import { SliderComponent } from './slider/slider.component';







@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    CarouselModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    BannerModule
],
declarations: [
    HeaderComponent,
    FooterComponent,
    
    SliderComponent,
    DirectorioHomeComponent,
    NoticiasHomeComponent,
    BlogHomeComponent,
    SliderPortalComponent,
    ModalComponent,
    TimelineComponent,
    FavoritosComponent,
    PerfilComponent,
    GalleriaComponent,
    DocumentosSharedComponent,
    InstagComponent,


],
exports: [
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    DirectorioHomeComponent,
    NoticiasHomeComponent,
    BlogHomeComponent,
    SliderPortalComponent,
    ModalComponent,
    TimelineComponent,
    FavoritosComponent,
    PerfilComponent,
    DocumentosSharedComponent,
    GalleriaComponent
]
})
export class SharedModule { }
