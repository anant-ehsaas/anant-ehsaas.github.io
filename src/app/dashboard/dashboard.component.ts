import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { VisionComponent } from '../vision/vision.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openContactDialog(): void {
    this.dialog.open(ContactUsComponent);
  }

  openVisionDialog(): void {
    this.dialog.open(VisionComponent);
  }
}
