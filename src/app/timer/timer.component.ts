import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  
  workTime: number = 1 * 60;
  breakTime: number = 0.5 * 60;
  timeLeft: number = this.workTime;
  isRunning: boolean = false;
  isPaused: boolean = false;
  interval!: any;
  theme: string = 'light';
  
  constructor(private themeService: ThemeService) {
    this.theme = this.themeService.getTheme();
    this.themeService.setTheme(this.theme);
   }

  ngOnInit(): void {
  }

  setInitialTheme(){
    this.themeService.setTheme('light');
  }

  startTimer(){
    if(!this.isRunning){
      this.isRunning = true;
      this.isPaused = false;
      this.themeService.setTheme('work');
      this.interval = setInterval(() => {
        if(this.timeLeft > 0){
          this.timeLeft--;
        } else {
          
          this.switchTheme();

        }
      }, 1000);
    }
  }

  pauseTimer(){
    if(this.isRunning){
      clearInterval(this.interval);
      this.isRunning = false;
      this.isPaused = true;
    }
  }

  resetTimer(){
    this.pauseTimer();
    this.timeLeft = this.theme === 'work' ? this.workTime : this.breakTime;
    this.isPaused = false;
  }

  switchTheme(){
    this.theme = this.theme === 'work' ? 'break' : 'work';
    this.themeService.setTheme(this.theme);
  
    this.timeLeft = this.theme === 'work' ? this.workTime : this.breakTime;
    this.startTimer();
    
  }

  formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  }
}
