import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme: string = 'light';
  setTheme(theme: string) {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }
  constructor() { 
    this.theme = localStorage.getItem('theme') || 'light';
    this.setTheme(this.theme);
  }

  getTheme(): string {
    return this.theme
  }
}
