import { Component } from '@angular/core';
import { DashboardComponent } from "../../dashboard/dashboard.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [DashboardComponent]
})
export class HomeComponent {

}
