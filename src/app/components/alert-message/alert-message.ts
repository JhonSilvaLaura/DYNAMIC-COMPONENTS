import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert-message',
  standalone:true,
  imports: [NgClass],
  templateUrl: './alert-message.html',
  styleUrl: './alert-message.scss'
})
export class AlertMessage {
  @Input() type: 'success' | 'error' | 'info' = 'info';
  @Input() message: string = '';
}
