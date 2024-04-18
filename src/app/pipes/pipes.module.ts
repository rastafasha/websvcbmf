import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EscapeHtmlPipe } from './keep-html.pipe';
// import { KeysPipe } from './keys.pipe';
import { SafePipe } from './safe.pipe';
import { SafeHtmlPipe } from './safehtml.pipe';



@NgModule({
  declarations: [
    EscapeHtmlPipe,
    // KeysPipe,
    SafeHtmlPipe,
    SafePipe,
  ],
  exports: [
    EscapeHtmlPipe,
    // KeysPipe,
    SafeHtmlPipe,
    SafePipe,
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
