import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-loading-spinner',
  standalone: false,
  templateUrl: './button-loading-spinner.component.html',
  styleUrl: './button-loading-spinner.component.scss',
})
export class ButtonLoadingSpinnerComponent {
  @Input() height: number;
  @Input() width: number;
  @Input() color: string;
}
