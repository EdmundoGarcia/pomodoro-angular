import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent {
  workTime: number = 25 * 60;
  breakTime: number = 5 * 60;
  timeLeft: number = this.workTime;
  isRunning: boolean = false;
  interval!: any;
  theme: string = 'light';

  constructor(private themeService: ThemeService) {
    this.theme = this.themeService.getTheme();
    this.themeService.setTheme(this.theme);
  }

  startTimer() {
    if (!this.isRunning) {
      this.isRunning = true;
      if (this.theme !== 'work') {
        this.theme = 'work';
        this.themeService.setTheme(this.theme);
      }
      this.interval = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          this.switchTheme();
        }
      }, 1000);
    }
  }

  pauseTimer() {
    if (this.isRunning) {
      clearInterval(this.interval);
      this.isRunning = false;
    }
  }

  resetTimer() {
    this.pauseTimer();
    this.timeLeft = this.theme === 'work' ? this.workTime : this.breakTime;
    this.themeService.setTheme(this.theme);
  }

  switchTheme() {
    if (this.isRunning) {
      clearInterval(this.interval);
    }

    const audio = new Audio('assets/sounds/mgs alert.mp3');
    audio.play();

    setTimeout(() => {
      if (this.theme === 'work') {
        this.theme = 'break';
        this.timeLeft = this.breakTime;
      } else {
        this.theme = 'work';
        this.timeLeft = this.workTime;
      }
      this.themeService.setTheme(this.theme);

      if (this.isRunning) {
        this.interval = setInterval(() => {
          if (this.timeLeft > 0) {
            this.timeLeft--;
          } else {
            this.switchTheme();
          }
        }, 1000);
      }
    }, 5000);
  }

  formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  }
}
