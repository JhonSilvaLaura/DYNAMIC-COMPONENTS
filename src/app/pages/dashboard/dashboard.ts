import { Component } from '@angular/core';
import { AlertMessage } from '../../components/alert-message/alert-message';
import { CardProfile } from '../../components/card-profile/card-profile';
import { ProgressBar } from '../../components/progress-bar/progress-bar';

@Component({
  selector: 'app-dashboard',
  imports: [AlertMessage,CardProfile,ProgressBar],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

}
