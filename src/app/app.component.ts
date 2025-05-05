import { Component } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pomodoro-angular';
  showTimer: boolean = false;

  constructor(private themeService: ThemeService) {
    this.themeService.setTheme('light');
  }
  toggleTimer() {
    this.showTimer = !this.showTimer;
  }
}
