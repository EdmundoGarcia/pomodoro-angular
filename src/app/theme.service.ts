import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkMode: boolean = false;
  setTheme(theme: string) {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
    this.isDarkMode = theme === 'dark';
  }
  constructor() { 
    this.isDarkMode = localStorage.getItem('theme') === 'dark';
    this.setTheme(this.isDarkMode ? 'dark' : 'light');
  }

  getTheme() {
    return this.isDarkMode;
  }
}
