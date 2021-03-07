import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  routes: Routes = [];
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.populateRoutes();
  }
  populateRoutes() {
    this.router.config.forEach((route) => {
      if (route.data) this.routes.push(route);
    });
  }
}
