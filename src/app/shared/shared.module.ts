import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PercentagePipe } from './pipe/percentage/percentage.pipe';
import { WrapPipe } from './pipe/wrap/wrap.pipe';




@NgModule({
  declarations: [
    PercentagePipe,
       WrapPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
