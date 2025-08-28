import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone:true,
  imports: [],
  templateUrl: './progress-bar.html',
  styleUrl: './progress-bar.scss'
})
export class ProgressBar {
  @Input() progress: number = 0; // porcentaje
}
