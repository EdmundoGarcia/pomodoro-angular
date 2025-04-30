import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent implements OnInit {
  isDarkMode: boolean = false;
  constructor(private themeService: ThemeService) { 
    this.isDarkMode = this.themeService.getTheme();
    const theme = this.isDarkMode ? 'dark' : 'light';
    this.themeService.setTheme(theme);
  }

  ngOnInit(): void {

  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    const theme = this.isDarkMode ? 'dark' : 'light';
    this.themeService.setTheme(theme);
  }

}
