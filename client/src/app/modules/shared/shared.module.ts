import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonLoadingSpinnerComponent } from './components/button-loading-spinner/button-loading-spinner.component';

@NgModule({
  declarations: [ButtonLoadingSpinnerComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonLoadingSpinnerComponent,
  ],
})
export class SharedModule {}
