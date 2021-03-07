import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'anant-ehsaas';

  routes: Routes = [];

  constructor(private router: Router) {
    this.populateRoutes();
  }

  populateRoutes() {
    this.router.config.forEach((route) => {
      if (route.data) this.routes.push(route);
    });
  }
}
