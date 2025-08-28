import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-profile',
  standalone: true,
  imports: [],
  templateUrl: './card-profile.html',
  styleUrl: './card-profile.scss'
})
export class CardProfile {
  @Input() name: string = '';
  @Input() role: string = '';
  @Input() imageUrl: string = '';
}
