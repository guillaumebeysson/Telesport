import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-details-country',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './details-country.component.html',
  styleUrl: './details-country.component.css'
})
export class DetailsCountryComponent {
  countryName: string;
  countryExists = true;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.countryName = this.route.snapshot.paramMap.get('country') || 'Unknown';
  }
}
