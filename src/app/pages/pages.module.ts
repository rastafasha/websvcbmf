import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from '../cmspage/contact-form/contact-form.component';
import { ActaConstitutivaComponent, AyudarteComponent, BlogpostListComponent, 
  BlogpostDetailComponent, BlogpostRecentComponent, BlogpostFeaturedComponent,
   DirectorioComponent, 
  //  CategoriesComponent, 
   HomeComponent, PortalEducativoComponent, RevistaComponent, SolvenciasComponent,
    NosotrosComponent, ResenaHistoricaComponent, JuntaNacionalComponent, JuntaRegionalComponent, 
    DocumentosComponent, PacientesComponent, QueesCirugiaComponent, TipsComponent, 
    TraumaComponent, ServiciosComponent, PacienteDetailComponent, PacienteRecentComponent,
     ProximamenteComponent } from './index.paginas';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { OrderModule } from 'ngx-order-pipe';
import { AppRoutingModule } from '../app-routing.module';
import { CongresoformsModule } from '../congresoforms/congresoforms.module';
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from '../pipes/pipes.module';

import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';

// import { QRCodeModule } from 'angular2-qrcode';

import { NgxPaginationModule } from 'ngx-pagination';
import { CKEditorModule } from 'ckeditor4-angular';
import { SharethisAngularModule } from 'sharethis-angular';
import { BannerModule } from '../shared/banner/banner.module';

@NgModule({
  declarations: [
    ActaConstitutivaComponent,
    AyudarteComponent,
    BlogpostListComponent,
    BlogpostDetailComponent,
    BlogpostRecentComponent,
    BlogpostFeaturedComponent,
    DirectorioComponent,
    // CategoriesComponent,
    HomeComponent,
    PortalEducativoComponent,
    RevistaComponent,
    SolvenciasComponent,
    NosotrosComponent,
    ResenaHistoricaComponent,
    JuntaNacionalComponent,
    JuntaRegionalComponent,
    ContactFormComponent,
    DocumentosComponent,
    PacientesComponent,
    QueesCirugiaComponent,
    TipsComponent,
    TraumaComponent,
    ServiciosComponent,
    PacienteDetailComponent,
    PacienteRecentComponent,
    ProximamenteComponent,
  ],
  exports: [
    ActaConstitutivaComponent,
    AyudarteComponent,
    BlogpostListComponent,
    BlogpostDetailComponent,
    BlogpostRecentComponent,
    BlogpostFeaturedComponent,
    DirectorioComponent,
    // CategoriesComponent,
    HomeComponent,
    PortalEducativoComponent,
    RevistaComponent,
    SolvenciasComponent,
    NosotrosComponent,
    ResenaHistoricaComponent,
    JuntaNacionalComponent,
    JuntaRegionalComponent,
    ContactFormComponent,
    DocumentosComponent,
    PacientesComponent,
    QueesCirugiaComponent,
    TipsComponent,
    TraumaComponent,
    ServiciosComponent,
    PacienteDetailComponent,
    PacienteRecentComponent,
    ProximamenteComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CongresoformsModule,
    PipesModule,
    SharedModule,
    CKEditorModule,
    NgxPaginationModule,
    SharethisAngularModule,
    SharedModule,
    BannerModule,
    // QRCodeModule,
    OrderModule,
    ShareButtonsModule
  ]
})
export class PagesModule { }
