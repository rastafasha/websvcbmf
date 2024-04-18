import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { PipesModule } from './pipes/pipes.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { CongresoformsModule } from './congresoforms/congresoforms.module';
import { SharedModule } from './shared/shared.module';
// import { QRCodeModule } from 'angular2-qrcode';
import { CKEditorModule } from 'ckeditor4-angular';
import { SharethisAngularModule } from 'sharethis-angular';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PipesModule,
    PagesModule,
    HttpClientModule,
    CKEditorModule,
    OrderModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SharethisAngularModule,
    // QRCodeModule,
    SharedModule,
    CongresoformsModule,
    SharedModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
