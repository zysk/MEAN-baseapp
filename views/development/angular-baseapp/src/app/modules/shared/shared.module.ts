import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SanitizePipe } from './pipes/sanitize.pipe';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [SanitizePipe, SortPipe],
  imports: [
    CommonModule,
    NgxSpinnerModule,
  ],
  exports: [
    NgxSpinnerModule,
    SanitizePipe,
    SortPipe
  ]
})
export class SharedModule { }
