import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme: string = 'light'; // Default theme

  setTheme(theme: string) {
    document.body.classList.remove('light', 'dark', 'work', 'break');
    document.body.classList.add(theme);
    this.theme = theme;
  }

  getTheme(): string {
    return this.theme;
  }
}
