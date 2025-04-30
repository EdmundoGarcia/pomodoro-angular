import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme = 'light';
  setTheme(theme: string) {
    document.body.classList.remove('light', 'night');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }
  constructor() { }

  getTheme() {
    return localStorage.getItem('theme') || 'light';
  }
}
