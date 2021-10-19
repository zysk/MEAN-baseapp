import { NgModule } from '@angular/core';
import { SortPipe } from './pipes/sort.pipe';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SanitizePipe } from './pipes/sanitize.pipe';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

@NgModule({
  declarations: [SanitizePipe, SortPipe],
  imports: [
    CommonModule,
    NgxQRCodeModule,
    NgxSpinnerModule,
  ],
  exports: [
    NgxQRCodeModule,
    NgxSpinnerModule,
    SanitizePipe,
    SortPipe
  ]
})
export class SharedModule { }
