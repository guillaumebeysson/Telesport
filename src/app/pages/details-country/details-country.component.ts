import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { OlympicsService } from '../../services/olympics.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CountryParticipation } from '../../models/Olympics';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details-country',
  standalone: true,
  imports: [NgxChartsModule, RouterLink],
  templateUrl: './details-country.component.html',
  styleUrls: ['./details-country.component.css']
})
export class DetailsCountryComponent implements OnInit {
  countryName: string | null;
  barChartData: { name: string, value: number }[] | undefined;
  subscription!: Subscription;


  constructor(private route: ActivatedRoute, private olympicsService: OlympicsService) {
    this.countryName = this.route.snapshot.paramMap.get('countryName');
  }

  ngOnInit(): void {
    this.subscription = this.olympicsService.getOlympicData().subscribe((data: CountryParticipation[]) => {
      const countryData = data.find(item => item.country === this.countryName);
      this.barChartData = countryData?.participations.map(participation => ({
        name: participation.year.toString(),
        value: participation.medalsCount
      }));
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}