import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent implements OnInit {

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.setTheme(this.themeService.getTheme());
  }

  toggleTheme() {
    const newTheme = document.body.classList.contains('light') ? 'night' : 'light';
    this.themeService.setTheme(newTheme);
  }

}
