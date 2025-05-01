import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent implements OnInit {
  theme: string = 'light';
  
  constructor(private themeService: ThemeService) { 
    this.theme = this.themeService.getTheme();
  }

  ngOnInit(): void {

  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    this.themeService.setTheme(this.theme);
  }

}
